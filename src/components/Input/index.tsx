import './styles.css';

import React, { HTMLProps } from 'react';

const Input: React.FC<HTMLProps<HTMLInputElement>> = ({
  placeholder,
  ...rest
}) => (
  <input className='input-field test' placeholder={placeholder} {...rest} />
);

export default Input;
