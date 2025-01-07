import FavoriteOn from '@/assets/favorito_01.svg';
import FavoriteOff from '@/assets/favorito_02.svg';

import type { Character } from '@/models/Character';

import styles from './HeroCard.module.scss';

import { useHeroCard } from '../../hooks/useHeroCard';

type HeroCardProps = {
  hero: Character;
};

export const HeroCard = ({ hero }: HeroCardProps) => {
  const hookResult = useHeroCard(hero);

  if (!hookResult) return null;

  const { favoriteStatus, toggleFavorite, handleNavigateHeroDetails, thumbnailUrl } =
    hookResult;

  return (
    <div
      data-testid="cypress-hero-card"
      className={styles.hero_card_container}
      onClick={handleNavigateHeroDetails}
    >
      <img className={styles.hero_card_image} src={thumbnailUrl} alt={hero?.name} />

      <div className={styles.hero_card_content_info}>
        <p>{hero.name}</p>

        <button
          data-testid="cypress-hero-card-button-favorite"
          className={styles.favorite_button}
          onClick={toggleFavorite}
          aria-label={
            favoriteStatus ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
          }
        >
          <img
            data-testid="cypress-hero-card-img-favorite"
            src={favoriteStatus ? FavoriteOn : FavoriteOff}
            alt={favoriteStatus ? 'Favorito' : 'Não Favorito'}
          />
        </button>
      </div>
    </div>
  );
};
