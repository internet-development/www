import styles from '@sections/V2SectionHeroOffice.module.scss';

import * as React from 'react';

import CanvasOffice from '@components/CanvasOffice';

export default function V2SectionHeroOffice(props) {
  return (
    <div className={styles.hero}>
      <CanvasOffice />
      <div className={styles.content}>
        <p className={styles.text}>
          Come start a fire with us
          <br />
          and create from our office space.
        </p>
      </div>
    </div>
  );
}
