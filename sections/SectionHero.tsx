import styles from '@sections/SectionHero.module.scss';

import * as React from 'react';

export default function SectionHero(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.heading}>{props.title}</p>
        <p className={styles.paragraph}>{props.children}</p>
      </div>
    </div>
  );
}
