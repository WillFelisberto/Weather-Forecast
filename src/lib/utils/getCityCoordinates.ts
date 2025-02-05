async function getCityCoordinates(city: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GEOCODING_API_URL}search?name=${encodeURIComponent(city)}`,
    { method: 'GET', cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar coordenadas da cidade.');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Cidade não encontrada.');
  }

  const { latitude, longitude } = data.results[0];

  return { latitude, longitude };
}

export default getCityCoordinates;
