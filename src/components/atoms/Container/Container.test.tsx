/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@/tests/test-utils';
import React from 'react';

import '@testing-library/jest-dom';
import { Container } from './Container';

describe('Container Component', () => {
  it('should render children correctly', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should apply the max width of 1366px', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );

    const containerElement = screen.getByText('Test content').parentElement;
    expect(containerElement).toHaveClass('max-w-[1366px]');
  });

  it('should apply padding and centering classes', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );

    const containerElement = screen.getByText('Test content').parentElement;

    // Verifica o padding e centralização
    expect(containerElement).toHaveClass('px-4', 'sm:px-6', 'lg:px-8', 'mx-auto');
  });

  it('should apply custom className', () => {
    render(
      <Container className="custom-class">
        <p>Test content</p>
      </Container>
    );

    const containerElement = screen.getByText('Test content').parentElement;
    expect(containerElement).toHaveClass('custom-class');
  });
});
