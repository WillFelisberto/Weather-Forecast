import { render, screen } from '@/tests/test-utils';
import React from 'react';

import '@testing-library/jest-dom';
import { WeatherCard } from './WeatherCard';

// Mock da função getWeatherIconSVG
jest.mock('@/lib/utils/icons', () => ({
  getWeatherIconSVG: jest.fn(() => ({
    weatherCondition: 'Cloudy',
    weatherIcon: <svg data-testid="weather-icon" />
  }))
}));

describe('WeatherCard Component', () => {
  const defaultProps = {
    location: 'Tehran',
    temperature: 35,
    windSpeed: 11,
    datatime: '2025-02-04T19:15',
    weatherCode: 800
  };

  it('should render the location and temperature correctly', () => {
    const { container } = render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText('Tehran')).toBeInTheDocument();
    expect(screen.getByText('35°C')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render the wind speed correctly', () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText('Wind Speed: 11 km/h')).toBeInTheDocument();
  });

  it('should render the correct day of the week and formatted time', () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText('Tuesday: 19:15')).toBeInTheDocument(); // Baseado na data fornecida
  });

  it('should render the weather condition correctly', () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText('Cloudy')).toBeInTheDocument();
  });

  it('should display the weather icon', () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByTestId('weather-icon')).toBeInTheDocument();
  });
});
