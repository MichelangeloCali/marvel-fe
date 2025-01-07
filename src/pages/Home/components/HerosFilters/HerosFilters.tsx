import FavoritesOn from '@/assets/favorito_01.svg';
import FavoritesOff from '@/assets/favorito_02.svg';
import OrderIcon from '@/assets/ic_heroi.svg';
import ToggleOff from '@/assets/toggle_off.svg';
import ToggleOn from '@/assets/toggle_on.svg';

import { Character } from '@/models/Character';
import { useCharactersStore } from '@/stores/characters';

import styles from './HerosFilters.module.scss';

type HerosFiltersProps = {
  filteredCharacters?: Character[];
};

export const HerosFilters = ({ filteredCharacters }: HerosFiltersProps) => {
  const { orderByName, isOrderByFavoritesOn, setOrderByName, toggleOrderByFavorites } =
    useCharactersStore();

  return (
    <div className={styles.heros_info_content}>
      <p>Encontrados {filteredCharacters?.length} heróis</p>

      <div className={styles.heros_order_content}>
        <div className={styles.heros_filter_toggle}>
          <img src={OrderIcon} alt="icon ordenar" />
          <p>Ordenar por nome - {orderByName === 'name' ? 'A/Z' : 'Z/A'}</p>

          <img
            src={orderByName === 'name' ? ToggleOn : ToggleOff}
            alt={orderByName === 'name' ? 'Ordenar Z/A' : 'Ordenar A/Z'}
            className={styles.heros_filter_toggle_icon}
            onClick={() => {
              const newOrder = orderByName === 'name' ? '-name' : 'name';
              setOrderByName(newOrder);
            }}
          />
        </div>

        <button
          data-testid="cypress-button-filter-favorite"
          className={styles.heros_favorites}
          onClick={toggleOrderByFavorites}
        >
          <img
            data-testid="cypress-img-favorite"
            src={isOrderByFavoritesOn ? FavoritesOn : FavoritesOff}
            alt={
              isOrderByFavoritesOn ? 'Não filtrar por favoritos' : 'Filtrar por favoritos'
            }
          />
          <p>Somente favoritos</p>
        </button>
      </div>
    </div>
  );
};
