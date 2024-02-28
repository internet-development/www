import styles from '@sections/SectionMoodBoard.module.scss';

import * as React from 'react';

export default function SectionMoodBoard(props) {
  return (
    <div className={styles.section} role="grid">
      <div className={styles.row} role="row">
        {props.data.map((each) => {
          return (
            <div className={styles.cell} key={`${each.id}`}>
              <img src={each.src} className={styles.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
