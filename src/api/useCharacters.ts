import { PathsEnum } from '@/enums/Paths';
import { type QueryFunctionContext, useInfiniteQuery } from '@/libs/reactQuery';

import {
  type CharactersResponse,
  CharactersResponseSchema,
} from '@/types/charactersResponse';

import { safeParse } from '@/utils/safeParseRequest';

import { api } from './api';
import { queryKeys } from './queryKeys';

const fetchCharacters = async (
  pageParam: number = 0,
  nameStartsWith?: string,
): Promise<CharactersResponse> => {
  const params = {
    limit: 20,
    offset: pageParam * 20,
    ...(nameStartsWith && { nameStartsWith }),
  };

  const { data } = await api.get<CharactersResponse>(PathsEnum.CHARACTERS, { params });

  safeParse(CharactersResponseSchema, data);

  return data;
};

export const useCharacters = (nameStartsWith?: string) =>
  useInfiniteQuery<CharactersResponse>({
    queryKey: queryKeys.characters(nameStartsWith),
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      fetchCharacters(Number(pageParam), nameStartsWith),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.flatMap((page) => page.results).length;
      return loadedItems < lastPage.total ? allPages.length : undefined;
    },
  });
