export enum PathsEnum {
  CHARACTERS = '/characters',
  CHARACTER_DETAIL = '/characters/{characterId}',
  CHARACTER_COMICS = '/characters/{characterId}/comics',
}

export type PathsEnumType = keyof typeof PathsEnum;
