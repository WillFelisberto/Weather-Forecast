import { render, screen } from '@/tests/test-utils';

import { Footer } from '.';

describe('Footer Component', () => {
  it('renders the correct text', () => {
    const { container } = render(<Footer />);
    expect(screen.getByText(/Made with/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('contains a link to GitHub', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Willian Souza/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/willFelisberto/');
  });
});
