import { useMemo } from 'react';

import { useCharacterDetails } from '@/api/characters';

export const useCharacterInfo = (heroId: string) => {
  const { data: characterDetails, isLoading, isError } = useCharacterDetails(heroId);

  const character = useMemo(() => {
    return characterDetails?.data.results?.[0] || null;
  }, [characterDetails]);

  const imageUrl = useMemo(() => {
    if (!character) return '';
    const { thumbnail } = character;
    return thumbnail?.path && thumbnail?.extension
      ? `${thumbnail.path}.${thumbnail.extension}`
      : '';
  }, [character]);

  const name = character?.name || '';
  const description = character?.description || 'Descrição não disponível.';

  return {
    character,
    imageUrl,
    name,
    description,

    isLoading,
    isError,
  };
};
