import { useState } from 'react';

import { useCharacters } from '@/api';

import { ContentSearch } from './components/ContentSearch';
import { Header } from './components/Header';
import { HerosCard } from './components/HerosCard';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [searchHero, setSearchHero] = useState('');

  const { data } = useCharacters();

  console.log('data', data);
  console.log('searchHero', searchHero);

  return (
    <div className={styles.container}>
      <Header />
      <ContentSearch searchHeroAction={setSearchHero} />

      <HerosCard />
    </div>
  );
};
