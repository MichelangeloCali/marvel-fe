import { useEffect, useMemo, useRef, useState } from 'react';

import { ClipLoader } from 'react-spinners';

import { useCharacters } from '@/api/useCharacters';
import FavoritesOn from '@/assets/favorito_01.svg';
import FavoritesOff from '@/assets/favorito_02.svg';
import OrderIcon from '@/assets/ic_heroi.svg';
import ToggleOff from '@/assets/toggle_off.svg';
import ToggleOn from '@/assets/toggle_on.svg';

import type { Character } from '@/models/Character';

import { useCharactersStore } from '@/stores/characters';
import { useFavoritesStore } from '@/stores/favorites';

import styles from './HerosContent.module.scss';

import { HeroCard } from '../HeroCard';

export const HerosContent = () => {
  const {
    searchHeroAction,
    orderByName,
    isOrderByFavoritesOn,
    setOrderByName,
    toggleOrderByFavorites,
  } = useCharactersStore();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isSuccess } =
    useCharacters(searchHeroAction, orderByName);

  const characters = useMemo(
    () => data?.pages.flatMap((page) => page.data.results) ?? [],
    [data],
  );

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

  const { favorites } = useFavoritesStore();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastHeroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let filtered = [...characters];

    if (isOrderByFavoritesOn) {
      filtered = favorites
        .map((fav) => characters.find((char) => String(char.id) === String(fav.id)))
        .filter(Boolean) as Character[];
    }

    setFilteredCharacters(filtered);
  }, [characters, isOrderByFavoritesOn, favorites]);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const loadMoreItems = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    };

    observer.current?.disconnect();

    observer.current = new IntersectionObserver(loadMoreItems, { rootMargin: '10px' });

    if (lastHeroRef.current) {
      observer.current.observe(lastHeroRef.current);
    }

    return () => observer.current?.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading && characters.length === 0) {
    return (
      <div className={styles.loading_container}>
        <ClipLoader color="#f2283c" size={30} />
        <p>Carregando heróis...</p>
      </div>
    );
  }

  if (characters.length === 0) {
    return <p className={styles.no_results}>Nenhum herói encontrado.</p>;
  }

  if (!isLoading && !isSuccess) return null;

  return (
    <div className={styles.heros_container}>
      <div className={styles.heros_info_content}>
        <p>Encontrados {filteredCharacters.length} heróis</p>

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

          <button className={styles.heros_favorites} onClick={toggleOrderByFavorites}>
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
        {filteredCharacters?.length > 0 &&
          filteredCharacters.map((hero, index) => {
            const isLastHero = index === filteredCharacters.length - 1;
            return (
              <div
                key={hero.id}
                ref={isLastHero ? lastHeroRef : null}
                className={styles.hero_card_wrapper}
              >
                <HeroCard hero={hero} />
              </div>
            );
          })}
      </div>

      {isFetchingNextPage && (
        <div className={styles.loading_next}>
          <ClipLoader color="#f2283c" size={30} />
          <p>Carregando mais heróis...</p>
        </div>
      )}
    </div>
  );
};
