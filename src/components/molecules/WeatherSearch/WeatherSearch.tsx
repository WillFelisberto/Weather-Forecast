/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';

import { Alert } from '@/components/atoms/Alert';
import { Container } from '@/components/atoms/Container';
import { Loader } from '@/components/atoms/Loader';
import { SearchInput } from '@/components/atoms/SearchInput';
import { WeatherCard, WeatherCardProps } from '@/components/molecules/WeatherCard';

import getCityCoordinatesDefault from '@/lib/utils/getCityCoordinates';
import getWeatherForecastDefault from '@/lib/utils/getWeatherForecast';

interface WeatherSearchProps {
  getCityCoordinates?(city: string): Promise<{ latitude: number; longitude: number }>;
  getWeatherForecast?(latitude: number, longitude: number): Promise<any>;
}

export const WeatherSearch = ({
  getCityCoordinates = getCityCoordinatesDefault,
  getWeatherForecast = getWeatherForecastDefault
}: WeatherSearchProps) => {
  const [weatherData, setWeatherData] = useState<WeatherCardProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      setLoading(true);

      const { latitude, longitude } = await getCityCoordinates(city);
      const weatherData = await getWeatherForecast(latitude, longitude);

      setWeatherData({
        datatime: weatherData.current_weather.time,
        location: city,
        temperature: weatherData.current_weather.temperature,
        weatherCode: weatherData.current_weather.weathercode,
        windSpeed: weatherData.current_weather.windspeed
      });
    } catch {
      setError('Erro ao buscar informações de clima. Tente novamente.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000); // 5 segundos

      return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente ou quando o erro mudar
    }
  }, [error]);

  return (
    <>
      <div className="p-5 sm:p-5 md:p-5 lg:p-5 w-fit justify-self-center ">
        <SearchInput placeholder="Search for a city" onSearchCallback={handleSearch} />
      </div>

      {error ? (
        <div className="p-5 sm:p-5 md:p-20 lg:p-20 w-full">
          <Alert
            color="red"
            className="  justify-self-center sm:w-full md:w-1/2  lg:w-fit"
            title="Error!"
            message={error}
          />
        </div>
      ) : isLoading ? (
        <Loader text="Carregando dados do clima" />
      ) : weatherData ? (
        <Container className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 mt-6">
          <WeatherCard
            {...weatherData}
            className="w-full sm:basis-1/2 lg:basis-1/3 max-w-[400px] flex-grow"
          />
        </Container>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No weather data available. Search for a city above.
        </p>
      )}
    </>
  );
};
