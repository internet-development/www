import styles from '@sections/SectionProject.module.scss';

import * as React from 'react';

export default function SectionProject(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <img className={styles.image} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-brand.png" />
      </div>
    </div>
  );
}
