import { render, screen } from '@/tests/test-utils';

import { Hero } from '.';

describe('Hero Component', () => {
  it('should render the title and highlight correctly', () => {
    const { container } = render(<Hero title="Seeing the weather" highlight="Dark Weather" />);
    expect(screen.getByText(/Seeing the weather/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark Weather/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render the subtitle if provided', () => {
    render(
      <Hero
        title="Seeing the weather"
        highlight="Dark Weather"
        subtitle="Stay updated with real-time weather forecasts."
      />
    );
    expect(screen.getByText('Stay updated with real-time weather forecasts.')).toBeInTheDocument();
  });

  it('should not render the subtitle if not provided', () => {
    render(<Hero title="Seeing the weather" highlight="Dark Weather" />);
    expect(
      screen.queryByText('Stay updated with real-time weather forecasts.')
    ).not.toBeInTheDocument();
  });

  it('should apply the custom className', () => {
    render(<Hero title="Seeing the weather" highlight="Dark Weather" className="custom-class" />);
    const container = screen.getByText(/Seeing the weather/i).parentElement;
    expect(container).toHaveClass('custom-class');
  });
});
