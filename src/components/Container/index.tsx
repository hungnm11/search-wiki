import { useDebounce, useSearch, useSearchForm } from '../../hooks';

import React from 'react';
import { ContainerProps } from '../../models/';

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { searchValue, onSearchChange } = useSearchForm();
  const { articles, status } = useSearch(useDebounce(searchValue, 500));
  return <>{children({ searchValue, onSearchChange, articles, status })}</>;
};

export default Container;
