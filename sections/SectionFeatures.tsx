import styles from '@sections/SectionFeatures.module.scss';

import * as React from 'react';

import Button from '@components/Button';

export default function SectionFeatures(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/bf87a743-e406-4c09-b1b9-8a5ef5165720.png" />
      </div>
      <div className={styles.promptBody}>
        <div className={styles.prompt}>
          <div className={styles.left}>
            <h2 className={styles.title}>Use our work</h2>
            <p className={styles.paragraph}>
              Internet Development Studio is passionate about creating open-source software and embraces transparency in our work. Visit our master template to explore our
              projects, utilize our template codes, or discover how to develop software in our style.
            </p>
          </div>
          <div className={styles.right}>
            <Button style={{ backgroundColor: '#FFDCFF' }} href="https://wireframes.internet.dev" target="_blank">
              View template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
