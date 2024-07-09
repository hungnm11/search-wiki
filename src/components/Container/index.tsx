import { useDebounce, useSearch, useSearchForm } from '../../hooks';

import React from 'react';
import { ContainerProps } from '../../models/';

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { searchValue, onSearchChange } = useSearchForm();
  const { articles, status, error } = useSearch(useDebounce(searchValue, 500));
  return <>{children({ searchValue, onSearchChange, articles })}</>;
};

export default Container;
