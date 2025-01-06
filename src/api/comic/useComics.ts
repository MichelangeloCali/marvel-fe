import { PathsEnum } from '@/enums/Paths';
import { useQuery } from '@/libs/reactQuery';

import { ComicsResponseSchema, type ComicsResponse } from '@/types/comicResponse';
import { safeParse } from '@/utils/safeParseRequest';

import { api } from '../api';
import { queryKeys } from '../queryKeys';

export type OrderBy = 'name' | '-name';

const fetchCharacterComics = async (characterId: string): Promise<ComicsResponse> => {
  const path = PathsEnum.CHARACTER_COMICS.replace('{characterId}', characterId);

  const { data } = await api.get<ComicsResponse>(path);

  safeParse(ComicsResponseSchema, data);

  return data;
};

export const useComics = (characterId: string) =>
  useQuery<ComicsResponse>({
    queryKey: queryKeys.characterComics(characterId),
    queryFn: () => fetchCharacterComics(characterId),
    enabled: !!characterId,
  });
