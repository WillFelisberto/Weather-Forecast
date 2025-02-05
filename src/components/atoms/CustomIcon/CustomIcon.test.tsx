import { render, screen } from '@/tests/test-utils';
import React from 'react';

import '@testing-library/jest-dom';
import { CustomIcon } from './CustomIcon';

describe('CustomIcon Component', () => {
  const sampleSVG = (
    <svg data-testid="custom-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  );

  it('renders the SVG with default size', () => {
    const { container } = render(<CustomIcon iconSVG={sampleSVG} />);

    const svgElement = screen.getByTestId('custom-icon');

    // Verifica se o SVG foi renderizado
    expect(svgElement).toBeInTheDocument();

    // Verifica se o tamanho padrão foi aplicado
    expect(svgElement).toHaveAttribute('width', '64');
    expect(svgElement).toHaveAttribute('height', '64');

    expect(container).toMatchSnapshot();
  });

  it('renders the SVG with a custom size', () => {
    render(<CustomIcon iconSVG={sampleSVG} size={128} />);

    const svgElement = screen.getByTestId('custom-icon');

    // Verifica se o tamanho customizado foi aplicado
    expect(svgElement).toHaveAttribute('width', '128');
    expect(svgElement).toHaveAttribute('height', '128');
  });
});
