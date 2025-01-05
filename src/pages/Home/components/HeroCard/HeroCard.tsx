import Favorite from '@/assets/favorito_01.svg';

import styles from './HeroCard.module.scss';

export const HeroCard = () => {
  return (
    <div className={styles.hero_card_container}>
      <div className={styles.hero_card_image} />

      <div className={styles.hero_card_content_info}>
        <p>Spider-Man</p>
        <img src={Favorite} alt="Favoritos" />
      </div>
    </div>
  );
};
