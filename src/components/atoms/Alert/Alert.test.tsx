import { render, screen } from '@/tests/test-utils';

import { Alert } from './Alert';

describe('Alert Component', () => {
  it('renders with the correct color', () => {
    const { container } = render(
      <Alert color="green" title="Success!" message="Everything is fine." />
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-green-100 border-green-500 text-green-700');

    expect(container).toMatchSnapshot();
  });

  it('displays the title and message', () => {
    render(<Alert title="Warning!" message="This is a warning message." />);
    expect(screen.getByText('Warning!')).toBeInTheDocument();
    expect(screen.getByText('This is a warning message.')).toBeInTheDocument();
  });
});
