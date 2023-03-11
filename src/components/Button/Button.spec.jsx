import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button/>', () => {
  it('should render the button with the text', () => {
    render(<Button text='load more' />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });


  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text='load more' onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when disabled true', () => {
    render(<Button text='load more' disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
  it('should be enabled when disabled false', () => {
    render(<Button text='load more' disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

});