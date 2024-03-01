import styles from '@sections/SectionTestimonials.module.scss';

import * as React from 'react';

const TestimonialCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.space}>
        <p className={styles.testimonial}>
          <span className={styles.hanging}>“</span>
          <span className={styles.remainder}>{props.children}”</span>
        </p>
        <div className={styles.author}>
          <strong>{props.name}</strong>
          <br />
          {props.source}
        </div>
      </div>
    </div>
  );
};

export default function SectionTestimonials(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.column}>
          <TestimonialCard name="HQ Han" source="Founder, Ansa Research">
            I don’t know what we would do if we did not have their help.
          </TestimonialCard>
        </div>
        <div className={styles.column}>
          <TestimonialCard name="Marc & Nima" source="Founders, Nova Energy">
            Their attention to detail, flexibility, and team dynamics are unparalleled.
          </TestimonialCard>
        </div>
        <div className={styles.column}>
          <TestimonialCard name="Dietrich Ayala" source="Browsers & Platforms, Protocol Labs">
            I feel privileged to have had the opportunity to spend time working together.
          </TestimonialCard>
        </div>
        <div className={styles.column}>
          <TestimonialCard name="Josh Miles" source="Creative Director, Material">
            Invaluable asset to design teams.
          </TestimonialCard>
        </div>
      </div>
    </div>
  );
}
