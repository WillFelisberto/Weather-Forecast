import { fireEvent, render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SearchInput } from './SearchInput';

describe('SearchInput Component', () => {
  it('renders the input with placeholder', () => {
    const { container } = render(
      <SearchInput placeholder="Test search..." onSearchCallback={jest.fn()} />
    );
    expect(screen.getByPlaceholderText('Test search...')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('triggers the search callback when Enter is pressed', async () => {
    const mockCallback = jest.fn().mockResolvedValue(undefined);
    render(<SearchInput onSearchCallback={mockCallback} />);

    const input = screen.getByPlaceholderText('Search here...');
    fireEvent.change(input, { target: { value: 'San Francisco' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockCallback).toHaveBeenCalledWith('San Francisco');
  });

  it('displays the spinner and disables the button during search', async () => {
    const mockCallback = jest
      .fn()
      .mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 1000)));
    render(<SearchInput onSearchCallback={mockCallback} />);

    const input = screen.getByPlaceholderText('Search here...');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(screen.getByRole('search-spin', { hidden: true })).toBeInTheDocument(); // Spinner
  });
});
