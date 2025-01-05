import { useState } from 'react';

import FavoritesOn from '@/assets/favorito_01.svg';
import FavoritesOff from '@/assets/favorito_02.svg';
import OrderIcon from '@/assets/ic_heroi.svg';
import ToggleOff from '@/assets/toggle_off.svg';
import ToggleOn from '@/assets/toggle_on.svg';

import styles from './HerosContent.module.scss';

import { HeroCard } from '../HeroCard';

export const HerosContent = () => {
  const [isOrderByNameToggleOn, setIsOrderByNameToggleOn] = useState(true);
  const [isOrderByFavoritesOn, setIsOrderByFavoritesOn] = useState(false);

  const handleToggle = () => {
    setIsOrderByNameToggleOn((prevState) => !prevState);
  };

  const handleFavorites = () => {
    setIsOrderByFavoritesOn((prevState) => !prevState);
  };

  console.log('ordenar por: ', isOrderByNameToggleOn, isOrderByFavoritesOn);

  return (
    <div className={styles.heros_container}>
      <div className={styles.heros_info_content}>
        <p>Encontrados 20 heróis</p>

        <div className={styles.heros_order_content}>
          <div className={styles.heros_filter_toggle}>
            <img src={OrderIcon} alt="icon ordenar" />
            <p>Ordenar por nome - A/Z</p>

            <img
              src={isOrderByNameToggleOn ? ToggleOn : ToggleOff}
              alt={isOrderByNameToggleOn ? 'Não ordenar por nome' : 'Ordenar por nome'}
              className={styles.heros_filter_toggle_icon}
              onClick={handleToggle}
            />
          </div>

          <button className={styles.heros_favorites} onClick={handleFavorites}>
            <img
              src={isOrderByFavoritesOn ? FavoritesOn : FavoritesOff}
              alt={
                isOrderByFavoritesOn
                  ? 'Não filtrar por favoritos'
                  : 'Filtrar por favoritos'
              }
            />
            <p>Somente favoritos</p>
          </button>
        </div>
      </div>

      <div className={styles.heros_content}>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />

        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};
