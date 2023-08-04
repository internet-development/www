import styles from '@sections/SectionTeam.module.scss';

import * as React from 'react';

export default function SectionTeam(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <img className={styles.image} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/team.png" />
        <p className={styles.paragraph}>{props.children}</p>
      </div>
    </div>
  );
}
