import { useMemo } from 'react';

import dayjs from 'dayjs';

import { useComics } from '@/api/comic';

export const useCharacterComics = (characterId: string) => {
  const { data: comics, isLoading, isError } = useComics(characterId);

  const comicsCount = comics?.data.total || 0;

  const lastComicDate = useMemo(() => {
    const lastComic =
      comics?.data.results
        ?.sort(
          (a, b) =>
            new Date(
              b.modified || b.dates?.find((d) => d.type === 'onsaleDate')?.date || 0,
            ).getTime() -
            new Date(
              a.modified || a.dates?.find((d) => d.type === 'onsaleDate')?.date || 0,
            ).getTime(),
        )[0]
        ?.dates?.find((date) => date.type === 'onsaleDate')?.date || null;

    return lastComic
      ? dayjs(lastComic).locale('pt-br').format('DD MMM. YYYY')
      : 'Não disponível';
  }, [comics]);

  return {
    comicsCount,
    lastComicDate,
    isLoading,
    isError,
  };
};
