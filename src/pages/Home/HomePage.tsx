import { Header } from './components/Header';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};
