import { Container } from '@/components/atoms/Container';
import { Hero } from '@/components/atoms/Hero';
import { WeatherSearch } from '@/components/molecules/WeatherSearch';

const HomePage = async () => {
  return (
    <>
      <Hero
        title="Seeing the weather of the whole world with"
        highlight="Dark Weather"
        className="max-w-4xl pt-[80px] justify-self-center pb-[40px] text-center center"
      />

      <Container className="pb-[100px]">
        <WeatherSearch />
      </Container>
    </>
  );
};

export default HomePage;
