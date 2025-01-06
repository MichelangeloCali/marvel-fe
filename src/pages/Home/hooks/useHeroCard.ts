import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@/enums/Routes';
import type { Character } from '@/models/Character';
import { useFavoritesStore } from '@/stores/favorites';

type UseHeroCardReturn = {
  favoriteStatus: boolean;
  toggleFavorite: (event: React.MouseEvent) => void;
  handleNavigateHeroDetails: () => void;
  thumbnailUrl: string;
};

export const useHeroCard = (hero: Character): UseHeroCardReturn | undefined => {
  const navigate = useNavigate();

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  if (!hero.id) return;

  const favoriteStatus = isFavorite(hero.id);

  const toggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (!hero.id || !hero.name) return;

    if (favoriteStatus) {
      removeFavorite(hero.id);
    } else {
      addFavorite({
        id: hero.id,
        name: hero.name,
        thumbnail: hero.thumbnail,
      });
    }
  };

  const handleNavigateHeroDetails = () => {
    navigate(`${RoutesEnum.HERO_DETAILS.replace(':heroId', String(hero.id))}`);
  };

  const thumbnailUrl = `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`;

  return {
    favoriteStatus,
    toggleFavorite,
    handleNavigateHeroDetails,
    thumbnailUrl,
  };
};
