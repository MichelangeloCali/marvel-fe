import { create, persist } from '@/libs/zustand';

type FavoriteHero = {
  id: string;
  name: string;
  thumbnail: string;
};

type FavoritesState = {
  favorites: FavoriteHero[];
  addFavorite: (hero: FavoriteHero) => void;
  removeFavorite: (heroId: string) => void;
  isFavorite: (heroId: string) => boolean;
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

      removeFavorite: (heroId) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((hero) => hero.id !== heroId) });
      },

      isFavorite: (heroId) => {
        const { favorites } = get();
        return favorites.some((hero) => hero.id === heroId);
      },
    }),

    { name: 'favorites-storage' },
  ),
);
