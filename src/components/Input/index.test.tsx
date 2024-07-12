import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '.';

describe('Input Component', () => {
  it('renders input with given placeholder', () => {
    const placeholderText = 'Enter text here';
    render(<Input placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it('spreads rest props', () => {
    render(<Input data-testid='input-test-id' />);

    const inputElement = screen.getByTestId('input-test-id');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies custom class', () => {
    render(<Input className='custom-class' />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('input-field test custom-class');
  });
});
