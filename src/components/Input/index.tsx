import './styles.css';

const Input = ({ placeholder, ...rest }: any) => (
  <input className='input-field' placeholder={placeholder} {...rest} />
);

export default Input;
