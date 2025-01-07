import { PathsEnum } from '@/enums/Paths';
import { useQuery } from '@/libs/reactQuery';

import { ComicsResponseSchema, type ComicsResponse } from '@/types/comicResponse';
import { safeParse } from '@/utils/safeParseRequest';

import { api } from '../api';
import { queryKeys } from '../queryKeys';

export type OrderBy = 'name' | '-name';

const fetchCharacterComics = async (
  characterId: string,
  orderBy?: string,
): Promise<ComicsResponse> => {
  const path = PathsEnum.CHARACTER_COMICS.replace('{characterId}', characterId);

  const params = orderBy === '-onsaleDate' ? { orderBy: '-onsaleDate', limit: 10 } : {};

  const { data } = await api.get<ComicsResponse>(path, { params });

  safeParse(ComicsResponseSchema, data);

  return data;
};

export const useComics = (characterId: string, orderBy?: string) =>
  useQuery<ComicsResponse>({
    queryKey: queryKeys.characterComics(characterId, orderBy),
    queryFn: () => fetchCharacterComics(characterId, orderBy),
    enabled: !!characterId,
  });
