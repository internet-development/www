import styles from '@sections/SectionQuote.module.scss';

import * as React from 'react';

export default function SectionQuote(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.heading}>“{props.children}”</p>
      </div>
    </div>
  );
}
