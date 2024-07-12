import './styles.css';

import React, { HTMLProps } from 'react';

const Input: React.FC<HTMLProps<HTMLInputElement>> = ({
  placeholder,
  className = '',
  ...rest
}) => (
  <input
    className={`input-field test ${className}`}
    placeholder={placeholder}
    {...rest}
  />
);

export default Input;
