import { useEffect, useMemo, useState } from 'react';

import { useCharacters } from '@/api';
import { Character } from '@/models/Character';
import { useCharactersStore } from '@/stores/characters';
import { useFavoritesStore } from '@/stores/favorites';

type UseHerosContentReturn = {
  isOrderByFavoritesOn: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  characters: Character[];
  filteredCharacters: Character[];
  setFilteredCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  isLoadingMore: boolean;
  hasFilteredCharacters: boolean;
};

export const useHerosContent = (): UseHerosContentReturn => {
  const { searchHeroAction, orderByName, isOrderByFavoritesOn } = useCharactersStore();
  const { favorites } = useFavoritesStore();

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

  return {
    isOrderByFavoritesOn,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isSuccess,
    characters,
    filteredCharacters,
    setFilteredCharacters,
    isLoadingMore,
    hasFilteredCharacters,
  };
};
