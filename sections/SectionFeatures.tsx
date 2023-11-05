import styles from '@sections/SectionFeatures.module.scss';

import * as React from 'react';

export default function SectionFeatures(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <img className={styles.image} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-brand.png" />
        <p className={styles.paragraph}>We focus on what we do well:</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <strong>Visual Interface Design & Product Branding</strong>
            <br /> We are obsessed with interfaces, logos and building design systems.
          </li>
          <li className={styles.item}>
            <strong>Full Stack Web Development</strong>
            <br />
            TypeScript, NextJS, SASS, Bash, and Postgres.
          </li>
          <li className={styles.item}>
            <strong>User Experience Audits</strong>
            <br />
            We'll go through all of your products and write reports.
          </li>
          <li className={styles.item}>
            <strong>Web3 Storage</strong>
            <br />
            IPFS & Filecoin data management and large scale storage.
          </li>
          <li className={styles.item}>
            <strong>Maintenance</strong>
            <br />
            Deployment, monitoring, cross browser testing and low cost scaling.
          </li>
          <li className={styles.item}>
            <strong>Omnipresence</strong>
            <br />
            You will feel like we're always around to help you when you need it. What more could you ask for?
          </li>
        </ul>
      </div>
    </div>
  );
}
