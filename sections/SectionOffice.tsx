import styles from '@sections/SectionOffice.module.scss';

import * as React from 'react';

export default function SectionOffice(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.paragraph}>[outside photo]</p>
        <p className={styles.paragraph}>
          Internet Development Studio Company’s office hosts small, creative teams dedicated to building companies and products. We occupy most of the third floor in the{' '}
          <a className={styles.link} href="https://www.commercialmls.com/content/upload/photos/pdf/fl/621841_1.pdf" target="_blank">
            Pike Place Champion Building
          </a>
          , located at 1928 Pike Place, Suite 301, in the heart of Pike Place, Seattle, WA.
        </p>
        <p className={styles.paragraph}>
          Our space features hardwood floors, symmetrical fiber internet, a local area network, two full kitchens, three meeting booths, a server room, lunch tables, and
          workstations. We provide 24/7 access, along with amenities like a printer, shredder, scanner, gallery lounge area, and triple-filtered water, fostering a collaborative
          environment for dream-building with like-minded peers.
        </p>{' '}
        <p className={styles.paragraph}>Additionally, we host weekend BBQs and events for designers, engineers, and entrepreneurs on our rooftop.</p>
        <p className={styles.paragraph}>[space map with numbers]</p>
        <p className={styles.paragraph}>dadadada</p>
      </div>
    </div>
  );
}
