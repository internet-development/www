import styles from '@sections/V2SectionUniversityOfWashington.module.scss';

import * as React from 'react';

export default function V2SectionUniversityOfWashington(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.backdrop}></div>
      <div className={styles.content}>
        <p className={styles.text}>
          If your department requires a website that complies with the latest legal standards, is powered by modern web tooling, and boasts a functional design, partner with us. We
          read 313 pages of documentation for you.
        </p>
      </div>
    </div>
  );
}
