import { Header } from './components/Header';
import { HerosContent } from './components/HerosContent';
import { SearchContent } from './components/SearchContent';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.home_page_container}>
      <Header />
      <SearchContent />
      <HerosContent />
    </div>
  );
};
