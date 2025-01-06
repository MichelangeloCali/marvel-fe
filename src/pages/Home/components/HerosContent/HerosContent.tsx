import { memo, useEffect, useMemo, useRef, useState } from 'react';

import { ClipLoader } from 'react-spinners';

import { useCharacters } from '@/api/useCharacters';

import type { Character } from '@/models/Character';

import { useCharactersStore } from '@/stores/characters';
import { useFavoritesStore } from '@/stores/favorites';

import styles from './HerosContent.module.scss';

import { HeroCard } from '../HeroCard';
import { HerosFilters } from '../HerosFilters';

const HerosFiltersMemo = memo(HerosFilters);

export const HerosContent = () => {
  const { searchHeroAction, orderByName, isOrderByFavoritesOn } = useCharactersStore();
  const { favorites } = useFavoritesStore();

  const observerTarget = useRef(null);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isSuccess } =
    useCharacters(searchHeroAction, orderByName);

  const characters = useMemo(
    () => data?.pages.flatMap((page) => page.data.results) ?? [],
    [data],
  );

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

  const isLoadingMore =
    isFetchingNextPage && hasNextPage && !isOrderByFavoritesOn && characters.length > 5;

  const hasFilteredCharacters = isSuccess && !isLoading && filteredCharacters?.length > 0;

  useEffect(() => {
    let filtered = [...characters];

    if (isOrderByFavoritesOn) {
      filtered = favorites;
    } else {
      filtered = characters.map((hero) => ({
        ...hero,
        isFavorite: favorites.some((fav) => fav.id === hero.id),
      }));
    }

    setFilteredCharacters(filtered);
  }, [characters, isOrderByFavoritesOn, favorites]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isOrderByFavoritesOn) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchNextPage, hasNextPage, observerTarget, isOrderByFavoritesOn]);

  if (isLoading && characters.length === 0) {
    return (
      <div className={styles.loading_container}>
        <ClipLoader color="#f2283c" size={28} />
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
      <HerosFiltersMemo filteredCharacters={filteredCharacters} />

      <div className={styles.heros_content}>
        {hasFilteredCharacters &&
          filteredCharacters.map((hero) => {
            return (
              <div key={hero.id} className={styles.hero_card_wrapper}>
                <HeroCard hero={hero} />
              </div>
            );
          })}
        <div ref={observerTarget}></div>
      </div>

      {isLoadingMore && (
        <div className={styles.loading_next}>
          <ClipLoader color="#fdeaec" size={22} />
          <p>Carregando mais heróis...</p>
        </div>
      )}
    </div>
  );
};
