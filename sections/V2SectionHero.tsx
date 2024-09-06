import styles from '@sections/V2SectionHero.module.scss';

import * as React from 'react';

import Canvas from '@components/Canvas';

export default function V2SectionHero(props) {
  return (
    <div className={styles.hero}>
      <Canvas />
      <div className={styles.content}>
        <p className={styles.text}>
          We are your dedicated tiger team, delivering high-performance web applications, internal tools, logos, brand guidelines, reports, presentations, static websites, LLM
          interfaces, illustrations, productivity applications, documentation, technical writing, and general web development services.
        </p>
      </div>
    </div>
  );
}
