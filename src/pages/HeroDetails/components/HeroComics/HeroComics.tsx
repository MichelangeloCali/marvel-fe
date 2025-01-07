import { useComics } from '@/api/comic';

import style from './HeroComics.module.scss';

type HeroComicsProps = {
  heroId: string;
};

export const HeroComics = ({ heroId }: HeroComicsProps) => {
  const { data, isLoading, isError } = useComics(heroId || '', '-onsaleDate');

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar quadrinhos.</div>;

  const comics = data?.data.results || [];

  return (
    <div className={style.hero_comics_container}>
      <h3>Últimos lançamentos</h3>

      <div className={style.hero_comics_list}>
        {comics.map((comic) => (
          <div key={comic.id} className={style.hero_comic_item}>
            <img
              src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
              alt={comic.title}
            />
            <h4>{comic.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
