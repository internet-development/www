import styles from '@sections/SectionOffice.module.scss';

import * as React from 'react';

export default function SectionOffice(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.paragraph}>
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ed21a4bb-d844-4896-b542-8753efad4e8d.jpeg" />
        </p>
        <p className={styles.paragraph}>
          Internet Development Studio Company’s office hosts small, creative teams dedicated to building companies and products. We occupy most of the third floor in the{' '}
          <a className={styles.link} href="https://www.commercialmls.com/content/upload/photos/pdf/fl/621841_1.pdf" target="_blank">
            Pike Place Champion Building
          </a>
          , located at{' '}
          <a
            className={styles.link}
            href="https://www.google.com/search?sca_esv=87faeafcc4202842&sca_upv=1&q=Internet+Development+Studio+Company&ludocid=12714871772401527453&lsig=AB86z5XkUVIM0ItATzZAbt1-c44s"
            target="_blank"
          >
            1928 Pike Place, Suite 301
          </a>
          , in the heart of{' '}
          <a className={styles.link} href="https://www.pikeplacemarket.org/" target="_blank">
            Pike Place, Seattle, WA
          </a>
          .
        </p>
        <p className={styles.paragraph} style={{ marginTop: `4rem` }}>
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/b2f461bb-9362-4ae7-b322-fba5d14577d7.jpeg" />
        </p>
        <p className={styles.paragraph}>
          Our space features hardwood floors, symmetrical fiber internet, a local area network, two full kitchens, three meeting booths, a server room, lunch tables, and
          workstations. We provide 24/7 access, along with amenities like a printer, shredder, scanner, gallery lounge area, and triple-filtered water, fostering a collaborative
          environment for dream-building with like-minded peers.
        </p>{' '}
        <p className={styles.paragraph}>Additionally, we host weekend BBQs and events for designers, engineers, and entrepreneurs on our rooftop.</p>
        <p className={styles.paragraph}>
          {' '}
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/7e6088bb-4ce2-47d9-9dfd-d658faed484d.png" />
        </p>
        <p className={styles.paragraph}>
          The dedicated desk space is reserved for those building within our ecosystem or connected to the companies or individuals here; it is not open to the general public.
        </p>
      </div>
    </div>
  );
}
