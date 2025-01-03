export enum RoutesEnum {
  HOME = '/',
  HERO_DETAILS = '/hero/:heroId',
}

export type RoutesEnumType = keyof typeof RoutesEnum;
