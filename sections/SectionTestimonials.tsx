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
          <TestimonialCard name="Colin Evran" source="Head of Ecosystem, Protocol Labs">
            One of the most badass teams I’ve had the pleasure of working with.
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
          <TestimonialCard name="Jimmy Liu" source="Co-founder, Muddy">
            An absolute pleasure working with the you and the team at the studio. Y'all our ride or die.
          </TestimonialCard>
        </div>
      </div>
    </div>
  );
}
