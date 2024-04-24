import styles from '@sections/SectionFooter.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function SectionFooter(props) {
  return (
    <div className={styles.body}>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.title}>Collaborate</p>
              <a className={styles.link} href="/inquire">
                Inquire
              </a>
              <a className={styles.link} href="https://t.me/internetdevelopmentstudio" target="_blank">
                Telegram
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.title}>Offering</p>
              <a className={styles.link} href="https://wireframes.internet.dev" target="_blank">
                Work samples
              </a>
              <a className={styles.link} href="/pricing">
                Pricing
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.title}>Connect</p>
              <a className={styles.link} href="https://bsky.app/profile/internetstudio.bsky.social" target="_blank">
                Bluesky
              </a>
              <a className={styles.link} href="https://github.com/internet-development" target="_blank">
                GitHub
              </a>
              <a className={styles.link} href="https://www.instagram.com/internetdevelopmentstudio/" target="_blank">
                Instagram
              </a>
              <a className={styles.link} href="https://read.cv/teams/intdev" target="_blank">
                ReadCV
              </a>
              <a className={styles.link} href="https://x.com/internetxstudio" target="_blank">
                Twitter
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.title}>Information</p>
              <a className={styles.link} href="/team">
                Team
              </a>
              <a className={styles.link} href="/mood">
                Mood
              </a>
              <a className={styles.link} href="https://github.com/internet-development/www">
                Source
              </a>
              <a className={styles.link} href="https://github.com/internet-development/nextjs-sass-starter">
                Templates
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content} style={{ padding: 16 }}>
            <p className={styles.subtext}>
              We are not using tracking pixels and we are not using cookies. We are not gathering information about your browser variant or your approximate location and we are not
              gathering information about your browsing actions. Our website is <a href="https://github.com/internet-development/www">open source</a> and whatever code is in the
              repository is what gets deployed.
            </p>
            <p className={styles.copy}>
              <Logo height="16px" href="/" />
              <br />
              Internet Development Studio
              <br />
              2024 Copyright &copy;
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
