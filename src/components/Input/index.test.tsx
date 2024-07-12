import { render } from '@testing-library/react';
import Input from '.'; // Adjust the import path

describe('Input Component', () => {
  let props: any;
  let sut;

  it('Should match snapshot', () => {
    sut = render(<Input {...props} />);
    expect(sut).toMatchSnapshot();
  });
});
