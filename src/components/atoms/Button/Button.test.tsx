import { render } from '@/tests/test-utils';

import { Button } from './Button';

// Snapshot Test Suite

describe('Button Component', () => {
  it('renders the default button correctly', () => {
    const { asFragment } = render(<Button>Default Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the primary button correctly', () => {
    const { asFragment } = render(<Button variant="primary">Primary Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the success button correctly', () => {
    const { asFragment } = render(<Button variant="success">Success Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the warning button correctly', () => {
    const { asFragment } = render(<Button variant="warning">Warning Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the danger button correctly', () => {
    const { asFragment } = render(<Button variant="danger">Danger Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
