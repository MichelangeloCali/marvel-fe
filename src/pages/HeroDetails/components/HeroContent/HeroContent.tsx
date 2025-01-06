import { ClipLoader } from 'react-spinners';

import RatingOff from '@/assets/avaliacao_off.svg';
import RatingOn from '@/assets/avaliacao_on.svg';
import FavoriteOn from '@/assets/favorito_01.svg';
import FavoriteOff from '@/assets/favorito_02.svg';
import Comics from '@/assets/ic_quadrinhos.svg';
import Movies from '@/assets/ic_trailer.svg';

import { useFavoritesStore } from '@/stores/favorites';

import styles from './HeroContent.module.scss';

import { useCharacterComics } from '../../hooks/useCharacterComics';
import { useCharacterInfo } from '../../hooks/useCharacterInfo';

type HeroContentProps = {
  heroId: string;
};

export const HeroContent = ({ heroId }: HeroContentProps) => {
  const { character, imageUrl, name, description, isLoading } = useCharacterInfo(
    heroId || '',
  );
  const {
    comicsCount,
    lastComicDate,
    isLoading: comicIsLoading,
  } = useCharacterComics(heroId || '');

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const favoriteStatus = isFavorite(Number(heroId));

  if (!isLoading && !comicIsLoading && !character) return <div>Herói não encontrado</div>;

  const toggleFavorite = () => {
    if (!character?.id || !name) return;

    if (favoriteStatus) {
      removeFavorite(character.id);
    } else {
      addFavorite({
        id: character.id,
        name: name,
        thumbnail: character.thumbnail,
      });
    }
  };

  if (isLoading || comicIsLoading) {
    return (
      <div className={styles.loading_container}>
        <ClipLoader color="#f2283c" size={28} />
        <p>Carregando heróis...</p>
      </div>
    );
  }

  return (
    <div className={styles.hero_content_container}>
      <div className={styles.hero_content_info}>
        <div className={styles.hero_content_name}>
          <h1>{name}</h1>

          <button onClick={toggleFavorite}>
            <img
              src={favoriteStatus ? FavoriteOn : FavoriteOff}
              alt={favoriteStatus ? 'Favorito' : 'Não Favorito'}
            />
          </button>
        </div>

        <div className={styles.hero_content_description}>
          <p>{description}</p>

          <div className={styles.hero_content_comics}>
            <div className={styles.hero_content_comic}>
              <p>Quadrinhos</p>
              <div>
                <img src={Comics} alt="Quadrinhos" />
                <span>{comicsCount}</span>
              </div>
            </div>
            <div className={styles.hero_content_movie}>
              <p>Filmes</p>
              <div>
                <img src={Movies} alt="Filmes" />
                <span>40</span>
              </div>
            </div>
          </div>

          <div className={styles.hero_content_rating}>
            <p>Rating:</p>
            <img src={RatingOn} alt="Tantas avaliações boas" />
            <img src={RatingOff} alt="Rating" />
          </div>

          <p>Último quadrinho: {lastComicDate}</p>
        </div>
      </div>

      <img
        className={styles.hero_details_page_image}
        src={imageUrl}
        alt={`imagem do ${name}`}
      />
    </div>
  );
};
