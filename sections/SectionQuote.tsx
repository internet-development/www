import styles from '@sections/SectionQuote.module.scss';

import * as React from 'react';

export default function SectionQuote(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.heading}>
          <span className={styles.hanging}>“</span>
          <span className={styles.remainder}>{props.children}”</span>
        </p>
      </div>
    </div>
  );
}
