import { create, persist } from '@/libs/zustand';
import { Character } from '@/models/Character';

type CharacterFavorite = Pick<Character, 'id' | 'name'>;

type FavoritesState = {
  favorites: CharacterFavorite[];
  addFavorite: (hero: CharacterFavorite) => void;
  removeFavorite: (heroId: number) => void;
  isFavorite: (heroId: number) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (hero) => {
        const { favorites } = get();
        if (favorites.length < 5) {
          set({ favorites: [...favorites, hero] });
        } else {
          alert('Você só pode favoritar até 5 heróis.');
        }
      },

      removeFavorite: (heroId: number) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((hero) => hero.id !== heroId) });
      },

      isFavorite: (heroId: number | string) => {
        const { favorites } = get();
        return favorites.some((hero) => String(hero.id) === String(heroId));
      },
    }),

    { name: 'favorites-storage' },
  ),
);
