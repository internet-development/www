import styles from '@sections/V2SectionOffice.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function V2SectionOffice(props) {
  return (
    <div className={styles.process} id="what-do-we-do">
      <h2 className={styles.h2}>
        <Logo height="1.6rem" href="/" />
        ’s office hosts small, creative teams dedicated to building companies and products. We occupy most of the third floor in the Champion Building, located at 1928 Pike Place,
        Suite 301, in the heart of Pike Place, Seattle, WA.
      </h2>

      <div className={styles.slot} style={{ marginTop: 88 }}>
        <div className={styles.card}>
          <div
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/6e19156a-79e0-4fa5-9cfd-e26c55cc85ad.png')` }}
          />
        </div>

        <div className={styles.card}>
          <div
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c6a5d250-1b05-4512-a85c-0a5329bfc1cc.png')` }}
          />
        </div>

        <div className={styles.card}>
          <img className={styles.schematic} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/7e6088bb-4ce2-47d9-9dfd-d658faed484d.png" />
        </div>
      </div>

      <p className={styles.h3}>
        Our space features hardwood floors, symmetrical fiber internet, a local area network, two full kitchens, three meeting booths, a server room, lunch tables, and dedicated
        workstations. We provide 24/7 access, along with amenities like a color printer, shredder, scanner, gallery lounge area, and triple-filtered water, fostering a
        collaborative environment for dream-building with like-minded peers.
        <br />
        <br />
        Additionally, we host weekend BBQs and events for designers, engineers, and entrepreneurs on our rooftop.
        <br />
        <br />
        <a href="https://users.garden" target="_blank" className={styles.link} style={{ color: `#FF4100` }}>
          ↗ Apply on https://users.garden
        </a>
      </p>

      <p className={styles.h4}>
        The dedicated desk space is reserved for those building within our ecosystem or connected to the companies or individuals here; it is not open to the general public. By
        using our office space you agree to the{' '}
        <a href="https://txt.dev/wwwjim/office-use-agreement" target="_blank" style={{ color: `#FF4100` }} className={styles.link}>
          ↗ Office Use Agreement
        </a>
        .
      </p>
    </div>
  );
}
