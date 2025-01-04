import { ReactElement } from 'react';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.footer} />
    </div>
  );
};
