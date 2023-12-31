import styles from '@sections/SectionHeroImage.module.scss';

import * as React from 'react';

export default function SectionHeroImage(props) {
  return (
    <div className={styles.section}>
      <img src={props.src} className={styles.image} />
    </div>
  );
}
