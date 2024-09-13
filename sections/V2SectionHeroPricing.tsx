import styles from '@sections/V2SectionHeroPricing.module.scss';

import * as React from 'react';

import BlueCanvas from '@components/BlueCanvas';

export default function V2SectionHeroPricing(props) {
  return (
    <div className={styles.hero}>
      <BlueCanvas />
      <div className={styles.content}>
        <p className={styles.text}>We create impact by working for you.</p>
      </div>
    </div>
  );
}
