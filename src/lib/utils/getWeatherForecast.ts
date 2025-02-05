async function getWeatherForecast(latitude: number, longitude: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`,
    { method: 'GET', cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar previsão do tempo.');
  }

  return response.json();
}

export default getWeatherForecast;
