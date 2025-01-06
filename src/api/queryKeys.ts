export const queryKeys = {
  characters: (nameStartsWith?: string, orderBy?: 'name' | '-name') => [
    'characters',
    nameStartsWith,
    orderBy,
  ],
};
