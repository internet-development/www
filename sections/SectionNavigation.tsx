import styles from '@sections/SectionNavigation.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function SectionNavigation(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <Logo height="24px" href="/" />
      </div>
    </div>
  );
}
