import Favorite from '@/assets/favorito_01.svg';

import styles from './HerosCard.module.scss';

export const HerosCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />

      <div className={styles.contentInfo}>
        <p>Spider-Man</p>
        <img src={Favorite} alt="Favoritos" />
      </div>
    </div>
  );
};
