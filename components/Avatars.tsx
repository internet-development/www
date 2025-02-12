import styles from '@components/Avatars.module.scss';

import * as React from 'react';

export default function Avatars(props) {
  const people = !props.people || !props.people.length ? ['INTDEV'] : props.people;
  const peopleElements = people.map((person) => {
    if (person === 'INTDEV') {
      return {
        src: `https://pbs.twimg.com/profile_images/1750435380539895808/t_rzcfWg_400x400.png`,
        name: 'Internet Development Studio Company',
        style: { boxShadow: `0 0 0 1px rgba(0, 0, 0, 0.1)` },
      };
    }

    if (person === 'XIANGAN') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1841883108305731585/3rhRm7aY_400x400.jpg',
        name: 'Xiangan He',
      };
    }

    if (person === 'ELIJAH') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1778697935544627200/1LvOcE-F_400x400.jpg',
        name: 'Elijah Seed Arita',
      };
    }

    if (person === 'JIM') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1880540584588570624/4LQlAZ0q_400x400.jpg',
        name: 'Jimmy Lee',
      };
    }

    if (person === 'ANASTASIYA') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1748647089633169408/B7vd7ito_400x400.jpg',
        name: 'Anastasiya Uraleva',
      };
    }

    if (person === 'ANDY') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1818030201051430918/M6kSNje3_400x400.jpg',
        name: 'Andrew Alimbuyuguen',
      };
    }

    if (person === 'CHENYU') {
      return {
        src: 'https://pbs.twimg.com/profile_images/1855462015361548288/2USHzAC4_400x400.jpg',
        name: 'Chenyu Huang',
      };
    }

    return null;
  });

  return (
    <div className={styles.avatars}>
      {peopleElements.map((each) => {
        if (!each) return;

        return <figure key={each.name} className={styles.item} style={{ ...each.style, backgroundImage: `url(${each.src})` }} />;
      })}
    </div>
  );
}
