import styles from '@sections/SectionOfficeRules.module.scss';

import * as React from 'react';

export default function SectionOfficeRules(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <h2 className={styles.heading}>Office Usage Agreement</h2>
        <p className={styles.paragraph}>
          The Internet Development Studio Company (the “Office”) is a private workspace located at 1928 Pike Place Suite 301 in Seattle, Washington. The office is not open to the
          public. Everyone using this space must adhere to the following guidelines to ensure the safety and enjoyment of our community.
        </p>

        <p className={styles.paragraph}>
          Cleaning, maintenance, partnership, and collaborator fees are charged on the first of each month and are non-refundable. The Internet Development Studio Company will
          allocate desks as needed, on any schedule, based on the requirements of our company and partnerships, and may do so as frequently as necessary.
        </p>

        <p className={styles.paragraph}>
          The sale of food or beverages within the office space is prohibited. This policy is in place to maintain a professional environment and to ensure compliance with health
          and safety regulations. Any distribution of food or drinks must be non-commercial and intended solely for personal consumption or pre-approved events.
        </p>

        <p className={styles.paragraph}>
          While our office space is designed to be comfortable and conducive to productivity, it is not intended to be used as a residential home. Living in the office is strictly
          prohibited. The space should be used exclusively for professional purposes, and personal activities that would occur in a residential Seattle setting should be conducted
          outside the office.
        </p>

        <p className={styles.paragraph}>
          Everyone must conduct themselves respectfully and use the space in a manner consistent with standard commercial office practices in Seattle. Disruptive, dangerous, or
          harmful activities are strictly prohibited. The use of our spaces for any illegal or offensive activities is not permitted under any circumstances.
        </p>

        <p className={styles.paragraph}>
          Currently, there is no parking available on the roof for members of our community. We ask that you plan accordingly and arrange alternative parking if necessary.
        </p>

        <p className={styles.paragraph}>You may invite guests to use our high-speed symmetrical fiber internet.</p>

        <p className={styles.paragraph}>
          To accommodate others, please limit your use of phone booths to one hour when the office is busy. This helps ensure everyone has access to the meeting space they need.
        </p>

        <p className={styles.paragraph}>
          Guests must be accompanied by their hosts at all times. Hosts are responsible for the conduct of their guests while they are in the office space. Additionally, for the
          safety of all partners and contributors, delivery personnel and couriers are not permitted inside the workspace. Please announce guests in our communication channels when
          they come.
        </p>

        <p className={styles.paragraph}>
          The duplication of keys, keycards, or any other means of entry is strictly prohibited. This measure is in place to maintain the security of our space and the safety of
          everyone within it.
        </p>

        <p className={styles.paragraph}>Do not leave the front door open or unlocked.</p>

        <p className={styles.paragraph}>
          Internet Development Studio Company maintains a zero-tolerance policy for discrimination or harassment. Discrimination and/or harassment based on gender, sexual
          orientation, marital or civil status, pregnancy or related conditions, gender identity or expression, transgender status, race, color, national origin, citizenship,
          religion, age, physical or mental disability, genetic information, military or veteran status, or any other protected characteristic is strictly prohibited.
        </p>

        <p className={styles.paragraph}>
          Operating equipment that has higher heat output or electrical consumption than typical office devices, or that places excessive strain on our electrical, IT, HVAC, or
          structural systems, is not allowed. This is to ensure the safety and functionality of our office environment.
        </p>

        <p className={styles.paragraph}>
          Help us maintain a clean and orderly workspace. While we strive to keep the office secure, Internet Development Studio Company is not responsible for any lost or stolen
          items.
        </p>

        <p className={styles.paragraph}>
          You are responsible for any items provided to you by Internet Development Studio Company for temporary use. Replacement fees will apply if such property is lost, stolen,
          or damaged.
        </p>

        <p className={styles.paragraph}>
          Please respect the work environment by keeping noise levels low. Loud music or disruptive noises are not allowed in team zones to ensure a productive atmosphere for all.
        </p>

        <p className={styles.paragraph}>
          If you wish to host an event in the office space, prior approval is required. Please submit event details at least two weeks before the event.
        </p>

        <p className={styles.paragraph}>Finally, we hope you pursue your dreams and build your vision.</p>
      </div>
    </div>
  );
}
