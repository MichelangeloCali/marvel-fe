import Logo from '@/assets/logo.svg';

import styles from './ContentSearch.module.scss';

export const ContentSearch = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo Marvel" />
    </div>
  );
};
