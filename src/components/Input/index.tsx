import React from 'react';
import { InputProps } from '../../models';
import './styles.css';

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => (
  <input className='input-field' placeholder={placeholder} {...rest} />
);

export default Input;
