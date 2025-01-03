import { useParams } from 'react-router-dom';

export const HeroDetailsPage = () => {
  const { heroId } = useParams<{ heroId: string }>();

  return (
    <div>
      <h1>HeroDetailsPage</h1>

      <p>Herói {heroId}</p>
    </div>
  );
};
