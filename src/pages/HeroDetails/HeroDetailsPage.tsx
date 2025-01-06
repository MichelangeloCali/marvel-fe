import { useParams } from 'react-router-dom';

import { useCharacterDetails } from '@/api/characters';

import styles from './HeroDetailsPage.module.scss';

export const HeroDetailsPage = () => {
  const { heroId } = useParams<{ heroId: string }>();

  const { data } = useCharacterDetails(heroId || '');

  const character = data?.data.results;

  const imageUrl = character
    ?.map((chr) => {
      if (chr.thumbnail?.path && chr.thumbnail?.extension) {
        return chr.thumbnail.path + '.' + chr.thumbnail.extension;
      }
      return null;
    })
    .filter((url) => url !== null)[0];

  const image2 = character?.map((char) => char.comics);

  console.log('image2', image2);

  if (!heroId) return <div>Herói não encontrado</div>;

  return (
    <div className={styles.hero_details_page_container}>
      <h1>HeroDetailsPage</h1>

      <img src={imageUrl} className={styles.hero_details_page_image} />

      <p>Herói {heroId}</p>
    </div>
  );
};
