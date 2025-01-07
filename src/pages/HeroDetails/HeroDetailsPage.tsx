import { useParams } from 'react-router-dom';

import { Header } from './components/Header';
import { HeroComics } from './components/HeroComics';
import { HeroInfo } from './components/HeroInfo';

import styles from './HeroDetailsPage.module.scss';

export const HeroDetailsPage = () => {
  const { heroId } = useParams<{ heroId: string }>();

  if (!heroId) return <div>Herói não encontrado</div>;

  return (
    <div className={styles.hero_details_page_container}>
      <Header />

      <div className={styles.hero_details_page_content}>
        <HeroInfo heroId={heroId} />
        <HeroComics heroId={heroId} />
      </div>
    </div>
  );
};
