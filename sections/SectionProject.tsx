import styles from '@sections/SectionProject.module.scss';

import * as React from 'react';

export default function SectionProject(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.paragraph}>Here are some projects:</p>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/747877ae-47e4-4205-9a0d-6542230fbf6b" />
            </div>
            <div className={styles.label}>Slate</div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/655b1ef8-83b7-4524-bf6d-15de72c7b5ba" />
            </div>
            <div className={styles.label}>TLDR, Protocol Labs</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/d2f420ec-cc40-4a89-b5ae-5ef49ca4d986" />
            </div>
            <div className={styles.label}>TXT.DEV</div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/6e2bc668-67c7-41a0-a786-f27d72378cb0" />
            </div>
            <div className={styles.label}>Storage Market, Protocol Labs</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/fc279a3c-92d0-4315-9f7f-ee05d6149012" />
            </div>
            <div className={styles.label}>Design Miami</div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <img className={styles.image} src="https://github.com/internet-development/www/assets/310223/e6819595-8de8-47f2-890e-87388eeed157" />
            </div>
            <div className={styles.label}>Filecoin Data Tools, Protocol Labs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
