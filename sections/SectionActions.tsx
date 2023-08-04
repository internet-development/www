import styles from '@sections/SectionActions.module.scss';

import * as React from 'react';

import Button from '@components/Button';

export default function SectionActions(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.block}>
          <div className={styles.left}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.paragraph}>{props.children}</p>
          </div>
          <div className={styles.right}>
            <Button href={props.href} onClick={props.onClick}>
              {props.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
