export const queryKeys = {
  characters: (nameStartsWith?: string, orderBy?: 'name' | '-name') => [
    'characters',
    nameStartsWith,
    orderBy,
  ],
  characterDetails: (characterId: string) => ['characterDetails', characterId],
  characterComics: (characterId: string, orderBy?: string) => [
    'characterComics',
    characterId,
    orderBy,
  ],
};
