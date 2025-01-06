import { PathsEnum } from '@/enums/Paths';
import { type QueryFunctionContext, useInfiniteQuery } from '@/libs/reactQuery';

import {
  type CharactersResponse,
  CharactersResponseSchema,
} from '@/types/charactersResponse';

import { safeParse } from '@/utils/safeParseRequest';

import { api } from '../api';
import { queryKeys } from '../queryKeys';

export type OrderBy = 'name' | '-name';

const fetchCharacters = async (
  pageParam: number = 0,
  nameStartsWith?: string,
  orderBy?: OrderBy,
): Promise<CharactersResponse> => {
  const params = {
    limit: 20,
    offset: pageParam * 20,
    ...(nameStartsWith && { nameStartsWith }),
    ...(orderBy && { orderBy }),
  };
  const { data } = await api.get<CharactersResponse>(PathsEnum.CHARACTERS, { params });

  safeParse(CharactersResponseSchema, data);

  return data;
};

export const useCharacters = (nameStartsWith?: string, orderBy?: OrderBy) =>
  useInfiniteQuery<CharactersResponse>({
    queryKey: queryKeys.characters(nameStartsWith, orderBy),
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      fetchCharacters(Number(pageParam), nameStartsWith, orderBy),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.flatMap((page) => page.data.results).length;
      return loadedItems < lastPage.data.total ? allPages.length : undefined;
    },
  });
