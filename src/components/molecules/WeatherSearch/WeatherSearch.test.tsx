import { getCityCoordinatesMock, getWeatherForecastMock } from '@/mocks/weatherApiMocks';
import { render, screen, fireEvent } from '@testing-library/react';

import { WeatherSearch } from './WeatherSearch';

describe('WeatherSearch Component', () => {
  it('renders the search input', () => {
    render(
      <WeatherSearch
        getCityCoordinates={getCityCoordinatesMock}
        getWeatherForecast={getWeatherForecastMock}
      />
    );
    expect(screen.getByPlaceholderText('Search for a city')).toBeInTheDocument();
  });

  it('fetches and displays weather data on search', async () => {
    render(
      <WeatherSearch
        getCityCoordinates={getCityCoordinatesMock}
        getWeatherForecast={getWeatherForecastMock}
      />
    );

    const input = screen.getByPlaceholderText('Search for a city');
    fireEvent.change(input, { target: { value: 'San Francisco' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await screen.findByText('San Francisco');
    expect(screen.getByText('20°C')).toBeInTheDocument();
  });

  it('displays an error message when the API fails', async () => {
    const mockFailingForecast = async () => {
      throw new Error('API Error');
    };

    render(
      <WeatherSearch
        getCityCoordinates={getCityCoordinatesMock}
        getWeatherForecast={mockFailingForecast}
      />
    );

    const input = screen.getByPlaceholderText('Search for a city');
    fireEvent.change(input, { target: { value: 'San Francisco' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await screen.findByText('Erro ao buscar informações de clima. Tente novamente.');
  });
});
