import Logo from '@/assets/logo_menor.svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <img src={Logo} alt="Logo Marvel" />
    </div>
  );
};
