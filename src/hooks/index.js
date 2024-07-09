// src/pages/api/recipes.ts
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useSearch = (query) => {
  const [state, setState] = useState({
    articles: [],
    status: 'LOADING',
    error: '',
  });

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

    axios
      .get(
        `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`
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
      //   if (cancelToken.current) {
      //     cancelToken.current.cancel('Operation canceled by the user.');
      //   }
    };
  }, [query]);

  return state;
};

export const useDebounce = (value, delay = 500) => {
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

  const onSearchChange = useCallback((e) => setSearchValue(e.target.value), []);
  return { searchValue, onSearchChange };
};
