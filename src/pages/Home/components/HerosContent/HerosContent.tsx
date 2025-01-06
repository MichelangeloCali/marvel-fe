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

  const observer = useRef<IntersectionObserver | null>(null);
  const lastHeroRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isSuccess } =
    useCharacters(searchHeroAction, orderByName);

  const characters = useMemo(
    () => data?.pages.flatMap((page) => page.data.results) ?? [],
    [data],
  );

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

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

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(loadMoreItems, { rootMargin: '800px' });

    if (lastHeroRef.current) {
      observer.current.observe(lastHeroRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, characters]);

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
      <HerosFiltersMemo filteredCharacters={filteredCharacters} />

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
