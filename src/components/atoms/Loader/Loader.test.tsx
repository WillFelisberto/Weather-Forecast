import { render, screen } from '@/tests/test-utils';

import { Loader } from '.';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('displays the passed text', () => {
    const text = 'Loading data';
    render(<Loader text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
