import styles from '@sections/V2SectionOffice.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function V2SectionOffice(props) {
  return (
    <div className={styles.process} id="what-do-we-do">
      <h2 className={styles.h2}>
        <Logo height="1.6rem" href="/" />
        ’s office is home to small, creative teams focused on building innovative companies and products. We occupy most of the third floor in the historic Champion Building at
        1928 Pike Place, Suite 301, on the bleeding edge of Seattle’s Pike Place Market.
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
        Our space offers hardwood floors, symmetrical fiber internet, a local area network, two full kitchens, three meeting booths, a server room, lunch tables, and dedicated
        workstations. With 24/7 access and amenities like a color printer, shredder, scanner, gallery lounge, and triple-filtered water, we foster a collaborative environment where
        you can build your vision alongside like-minded peers.
        <br />
        <br />
        <a href="https://users.garden" target="_blank" className={styles.link} style={{ color: `#FF4100` }}>
          ↗ Apply on https://users.garden
        </a>
      </p>

      <p className={styles.h4}>
        The dedicated desk space is reserved for those building within our{' '}
        <a href="https://mana.inc" target="_blank" style={{ color: `#FF4100` }}>
          ecosystem
        </a>{' '}
        or connected to the companies or individuals here; it is not open to the general public. <br />
        <br />
        If you are a partner of the space you agree to the{' '}
        <a href="https://txt.dev/wwwjim/office-use-agreement" target="_blank" style={{ color: `#FF4100` }} className={styles.link}>
          ↗ Office Use Agreement
        </a>
        .
      </p>
    </div>
  );
}
