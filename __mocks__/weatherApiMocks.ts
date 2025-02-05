/* eslint-disable @typescript-eslint/no-unused-vars */
export async function getCityCoordinatesMock(city: string) {
  return { latitude: 37.7749, longitude: -122.4194 }; // Mock para San Francisco
}

export async function getWeatherForecastMock(latitude: number, longitude: number) {
  return {
    current_weather: {
      time: '2025-02-04T12:00',
      temperature: 20,
      weathercode: 2,
      windspeed: 10
    }
  };
}
