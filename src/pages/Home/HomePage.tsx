import { useState } from 'react';

import { ContentSearch } from './components/ContentSearch';
import { Header } from './components/Header';
import { HerosCard } from './components/HerosCard';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [searchHero, setSearchHero] = useState('');

  console.log('searchHero', searchHero);

  return (
    <div className={styles.container}>
      <Header />
      <ContentSearch searchHeroAction={setSearchHero} />

      <HerosCard />
    </div>
  );
};
