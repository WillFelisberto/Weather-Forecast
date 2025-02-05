import { render, screen } from '@/tests/test-utils';

import { Header } from '.';
// Mock do componente Button
jest.mock('@/components/atoms/Button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>
}));

describe('Header Component', () => {
  it('should render the title correctly', () => {
    const { container } = render(<Header />);
    expect(screen.getByText('Dark Weather')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render all navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Download App')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });

  it('should render the sign-up button', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });

  it('should apply the custom className', () => {
    render(<Header className="custom-header-class" />);
    const headerElement = screen.getByRole('banner'); // Considerando que o header usa a tag <header>
    expect(headerElement).toHaveClass('custom-header-class');
  });
});
