import styles from '@sections/SectionTestimonials.module.scss';

import * as React from 'react';

export default function SectionTestimonials(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.space}>
              <p className={styles.testimonial}>“I don’t know what we would do if we did not have their help.”</p>
              <div className={styles.author}>
                <strong>HQ Han</strong>
                <br />
                Founder, Ansa Research
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.space}>
              <p className={styles.testimonial}>“Takes initiative, and adapts strategies adeptly for dynamic design projects.”</p>
              <div className={styles.author}>
                <strong>Bill Schrekenstein</strong>
                <br />
                Engineering Manager, Protocol Labs
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.space}>
              <p className={styles.testimonial}>“I feel privileged to have had the opportunity to spend time working together.”</p>
              <div className={styles.author}>
                <strong>Dietrich Ayala</strong>
                <br />
                Browsers & Platforms, Protocol Labs
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.space}>
              <p className={styles.testimonial}>“Invaluable asset to design teams.”</p>
              <div className={styles.author}>
                <strong>Josh Miles</strong>
                <br />
                Creative Director, Material
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
