import styles from '@sections/V2SectionClients.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function V2SectionClients(props) {
  return (
    <div className={styles.clients}>
      <h2 className={styles.h2}>
        Who has <Logo height="1.6rem" href="/team" /> worked with?
      </h2>

      <div className={styles.slots}>
        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/b6022636-7a47-4d79-8e5b-ea4ccb6e451d.png"
          alt="We worked with Google"
        />

        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/7d57b308-1a3d-42ee-842c-e9029f20ac7c.png"
          alt="We worked with Beautiful Things"
        />

        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/e7c71bdf-f4cb-4d8b-8b26-53221ac5700e.png"
          alt="We helped Mana Industries"
        />

        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/07513c1e-5faf-4df3-8be4-e7508a8d470c.png"
          alt="We helped Protocol Labs"
        />

        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/31e8deba-857e-4036-8a21-1c7f1b934712.png"
          alt="We helped Nova Energy"
        />

        <img
          className={styles.image}
          src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1d73261f-65c8-4a90-85aa-2d34b0b7e85c.png"
          alt="We helped El Cap Capital"
        />

        <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c27d71a8-017c-449b-bace-5e71e82d9d13.png" alt="We helped Muddy" />

        <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c5a8b9a2-f597-48ce-bb95-c7b9cf326eab.png" alt="We helped Bluesky" />
      </div>

      <p className={styles.h3}>
        In 2024, <Logo height="1.6rem" href="/team" /> successfully completed 16 multi-month projects, all while honoring non-disclosure agreements and maintaining full
        confidentiality. We specialize as a tiger team, focused on delivering critical solutions.
      </p>
    </div>
  );
}
