import { useNavigate } from 'react-router-dom';

import FavoriteOn from '@/assets/favorito_01.svg';
import FavoriteOff from '@/assets/favorito_02.svg';

import { RoutesEnum } from '@/enums/Routes';
import type { Character } from '@/models/Character';
import { useFavoritesStore } from '@/stores/favorites';

import styles from './HeroCard.module.scss';

type HeroCardProps = {
  hero: Character;
};

export const HeroCard = ({ hero }: HeroCardProps) => {
  const navigate = useNavigate();

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  if (!hero.id) return;

  const favoriteStatus = isFavorite(hero.id);

  const toggleFavorite = () => {
    if (!hero.id || !hero.name || !hero.thumbnail?.path || !hero.thumbnail?.extension)
      return;

    if (isFavorite(hero.id)) {
      removeFavorite(hero.id);
    } else {
      addFavorite({
        id: hero.id,
        name: hero.name,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        thumbnail: `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`,
      });
    }
  };

  const handleNavigateHeroDetails = () => {
    navigate(`${RoutesEnum.HERO_DETAILS.replace(':heroId', String(hero.id))}`);
  };

  const thumbnailUrl =
    typeof hero.thumbnail === 'string'
      ? hero.thumbnail
      : `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`;

  return (
    <div className={styles.hero_card_container}>
      <img
        className={styles.hero_card_image}
        src={thumbnailUrl}
        alt={hero?.name}
        onClick={handleNavigateHeroDetails}
      />

      <div className={styles.hero_card_content_info}>
        <p className={styles.hero_card_name}>{hero.name}</p>

        <button
          className={styles.favorite_button}
          onClick={toggleFavorite}
          aria-label={
            favoriteStatus ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
          }
        >
          <img
            src={favoriteStatus ? FavoriteOn : FavoriteOff}
            alt={favoriteStatus ? 'Favorito' : 'Não Favorito'}
          />
        </button>
      </div>
    </div>
  );
};
