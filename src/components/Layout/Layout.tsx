import { ReactElement } from 'react';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.layout_content}>{children}</div>
      <div className={styles.layout_footer} />
    </div>
  );
};
