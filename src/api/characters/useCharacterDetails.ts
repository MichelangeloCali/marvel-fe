import { PathsEnum } from '@/enums/Paths';
import { useQuery } from '@/libs/reactQuery';

import {
  type CharacterDetailResponse,
  CharacterDetailResponseSchema,
} from '@/types/characterDetailsResponse';

import { safeParse } from '@/utils/safeParseRequest';

import { api } from '../api';
import { queryKeys } from '../queryKeys';

export type OrderBy = 'name' | '-name';

const fetchCharacterDetails = async (
  characterId: string,
): Promise<CharacterDetailResponse> => {
  const path = PathsEnum.CHARACTER_DETAIL.replace('{characterId}', characterId);

  const { data } = await api.get<CharacterDetailResponse>(path);

  safeParse(CharacterDetailResponseSchema, data);

  return data;
};

export const useCharacterDetails = (characterId: string) =>
  useQuery<CharacterDetailResponse>({
    queryKey: queryKeys.characterDetails(characterId),
    queryFn: () => fetchCharacterDetails(characterId),
    enabled: !!characterId,
  });
