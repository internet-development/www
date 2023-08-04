import styles from '@components/Button.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export default function Button(props) {
  if (!Utilities.isEmpty(props.href)) {
    return (
      <a className={styles.button} href={props.href}>
        {props.children}
      </a>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
}
