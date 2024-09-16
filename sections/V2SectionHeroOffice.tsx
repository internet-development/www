import styles from '@sections/V2SectionHeroOffice.module.scss';

import * as React from 'react';

import CanvasOffice from '@components/CanvasOffice';

export default function V2SectionHeroOffice(props) {
  return (
    <div className={styles.hero}>
      <CanvasOffice />
      <div className={styles.content}>
        <p className={styles.text}>Come create on the internet with us.</p>
      </div>
    </div>
  );
}