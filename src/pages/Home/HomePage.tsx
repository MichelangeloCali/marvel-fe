import { useState } from 'react';

import { useCharacters } from '@/api';

import { Header } from './components/Header';
import { HerosContent } from './components/HerosContent';
import { SearchContent } from './components/SearchContent';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [searchHero, setSearchHero] = useState('');

  const { data } = useCharacters();

  console.log('data', data);
  console.log('searchHero', searchHero);
  return (
    <div className={styles.home_page_container}>
      <Header />
      <SearchContent searchHeroAction={setSearchHero} />
      <HerosContent />
    </div>
  );
};
