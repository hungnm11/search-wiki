import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('changes value when typing', () => {
    render(<Input />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(inputElement.value).toBe('new value');
  });
});
