import { create } from '@/libs/zustand';

type CharactersStore = {
  searchHeroAction: string;
  setSearch: (search: string) => void;
  isOrderByNameToggleOn: boolean;
  toggleOrderByName: () => void;
  orderByName: 'name' | '-name';
  setOrderByName: (order: 'name' | '-name') => void;
  isOrderByFavoritesOn: boolean;
  toggleOrderByFavorites: () => void;
  setOrderByFavorites: (state: boolean) => void;
};

export const useCharactersStore = create<CharactersStore>((set) => ({
  searchHeroAction: '',
  setSearch: (search: string) => set({ searchHeroAction: search }),

  isOrderByNameToggleOn: true,
  toggleOrderByName: () =>
    set((state) => {
      const newOrderBy = state.isOrderByNameToggleOn ? '-name' : 'name';
      return {
        isOrderByNameToggleOn: !state.isOrderByNameToggleOn,
        orderByName: newOrderBy,
      };
    }),

  setOrderByName: (order: 'name' | '-name') => set({ orderByName: order }),

  orderByName: 'name',

  isOrderByFavoritesOn: false,
  toggleOrderByFavorites: () =>
    set((state) => ({
      isOrderByFavoritesOn: !state.isOrderByFavoritesOn,
    })),
  setOrderByFavorites: (state: boolean) => set({ isOrderByFavoritesOn: state }),
}));
