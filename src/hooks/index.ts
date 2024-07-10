// src/pages/api/recipes.ts
import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IState } from '../models';

export const useSearch = (query: string, limit: number = 10) => {
  const [state, setState] = useState<IState>({
    articles: [],
    status: 'LOADING',
    error: '',
  });

  const cancelToken = useRef<CancelTokenSource | null>(null);

  useEffect(() => {
    if (query.length < 3) {
      setState({
        articles: [],
        status: 'IDLE',
        error: '',
      });
      return;
    }

    setState((prevState) => ({ ...prevState, status: 'LOADING' }));

    if (cancelToken.current) {
      cancelToken.current.cancel('Operation canceled due to new request.');
    }

    cancelToken.current = axios.CancelToken.source();

    axios
      .get(
        `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&&limit=${limit}`,
        { cancelToken: cancelToken.current.token }
      )
      .then(function (response) {
        // handle success
        const parseResponsed = [];
        for (let i = 0; i < response.data[1].length; i++) {
          parseResponsed.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        setState({
          articles: parseResponsed,
          status: 'SUCCESS',
          error: '',
        });
      })
      .catch(function (error) {
        // handle error
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          // Handle error
          setState({
            articles: [],
            status: 'ERROR',
            error: error.message,
          });
        }
      });

    return () => {
      if (cancelToken.current) {
        cancelToken.current.cancel('Operation canceled by the user.');
      }
    };
  }, [query]);

  return state;
};

export const useDebounce = (value: any, delay: any = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
};

export const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = useCallback(
    (e: any) => setSearchValue(e.target.value),
    []
  );
  return { searchValue, onSearchChange };
};
