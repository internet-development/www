import styles from '@sections/SectionTeam.module.scss';

import * as React from 'react';

export default function SectionTeam(props) {
  // https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/team.png
  // https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/8d48e7ab-ae25-439b-a56c-33b3c2d77cb2.png
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/8d48e7ab-ae25-439b-a56c-33b3c2d77cb2.png" />
        <p className={styles.paragraph}>{props.children}</p>
      </div>
    </div>
  );
}
