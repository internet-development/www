import styles from '@sections/V2Wrapper.module.scss';

import * as React from 'react';

import Button from '@components/Button';
import Bluesky from '@components/svg/Bluesky';
import GitHub from '@components/svg/GitHub';
import GridOverlay from '@components/GridOverlay';
import Instagram from '@components/svg/Instagram';
import Logo from '@components/Logo';
import Telegram from '@components/svg/Telegram';
import X from '@components/svg/X';

export async function generateMetadata({ params, searchParams }) {
  const title = 'Internet Development Studio';
  const description = 'Internet Development Studio is an engineering and design team based out of Seattle—WA. We design, brand, market and code.';
  const url = 'https://internet.dev';

  return {
    metadataBase: new URL('https://internet.dev'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      images: ['https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/intdev.png'],
    },
    twitter: {
      title,
      description,
      url,
      handle: '@internetxstudio',
      cardType: 'summary_large_image',
    },
  };
}

const Link = (props) => {
  return (
    <a href={props.href} target={props.target} className={styles.link} style={props.style}>
      {props.children}
    </a>
  );
};

export default async function Page(props) {
  const response = await fetch('https://wireframes.internet.dev/api');
  const json = await response.json();

  let samples: any = [];
  if (json && json.data && json.data.length) {
    samples = [...json.data];
  }

  const isPricingPage = props.active === 'PRICING';
  const isOfficePage = props.active === 'OFFICE';
  const isUW = props.active === 'UNIVERSITY_OF_WASHINGTON';

  return (
    <>
      <header className={styles.top} id="we-are-excited-to-work-together">
        <div className={styles.left}>
          <Logo height="24px" href="/" style={{ paddingTop: 2 }} />
        </div>
        <div className={styles.right}>
          <Link href="https://wireframes.internet.dev" style={{ paddingBottom: 6 }}>
            ↗ Public work samples
          </Link>
        </div>
      </header>
      <address className={styles.address}>
        Internet Development Studio Company
        <br />
        1928 Pike Place Suite 301
        <br />
        Seattle, WA, 98121
      </address>

      <nav className={styles.navigation}>
        <div className={styles.navigationLeft}>
          {isPricingPage ? <span className={styles.deadLink}>↘ Pricing</span> : <Link href={`/pricing`}>↘ Pricing</Link>}
          {isOfficePage ? (
            <span className={styles.deadLink} style={{ color: `#FF4100` }}>
              ↘ Office
            </span>
          ) : (
            <Link href={`/office`}>↘ Office</Link>
          )}
          {isUW ? (
            <span className={styles.deadLink} style={{ color: `var(--theme-uw-spirit-purple)` }}>
              ↘ University of Washington
            </span>
          ) : (
            <Link href={`/university-of-washington`}>↘ University of Washington</Link>
          )}
        </div>
        <div className={styles.navigationRight}>
          <Link href={`https://t.me/internetdevelopmentstudio`} target="_blank">
            Telegram
          </Link>
          <Link href={`https://github.com/internet-development`} target="_blank">
            GitHub
          </Link>
          <Link href={`https://bsky.app/profile/internetstudio.bsky.social`} target="_blank">
            Bluesky
          </Link>
          <Link href={`https://x.com/internetxstudio`} target="_blank">
            X
          </Link>
          <Link href={`https://www.instagram.com/internetdevelopmentstudio/`} target="_blank">
            Instagram
          </Link>
        </div>
      </nav>

      {props.children}

      {props.footerImageSRC ? <img alt="The Internet Development Studio Company" className={styles.image} src={props.footerImageSRC} /> : null}

      <footer className={styles.footer}>
        <div className={styles.footerHeader}>
          <Logo height="48px" href="/" />
        </div>
        <div className={styles.footerColumns}>
          <div className={styles.footerExampleColumn}>
            <div className={styles.title}>24 Public Work Samples</div>
            {samples.map((each) => {
              if (each.internal) {
                return null;
              }

              return (
                <a className={styles.footerItemPortioned} href={`https://wireframes.internet.dev/${each.href}`} key={each.href} target="_blank">
                  {each.label}
                </a>
              );
            })}
          </div>

          <div className={styles.column}>
            <div className={styles.title}>6 Products</div>
            <a className={styles.footerItem} href="https://beautifulthings.xyz">
              Beautiful Things
            </a>
            <span className={styles.footerItemPending}>Assets (coming soon)</span>
            <span className={styles.footerItemPending}>Diagrams (coming soon)</span>
            <span className={styles.footerItemPending}>Analytics (coming soon)</span>
            <a className={styles.footerItem} href="https://txt.dev">
              TXT
            </a>
            <a className={styles.footerItem} href="https://users.garden">
              Users
            </a>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Information</div>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-acceptable-use" target="_blank">
              Acceptable Use
            </a>
            <a className={styles.footerItem} href="https://www.linkedin.com/company/internet-dev" target="_blank">
              LinkedIn Page
            </a>
            <a className={styles.footerItem} href="/office">
              Office Page
            </a>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/office-use-agreement">
              Office Use Agreement
            </a>
            <a className={styles.footerItem} href="/pricing">
              Pricing Page
            </a>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-privacy-policy" target="_blank">
              Privacy Policy
            </a>
            <a className={styles.footerItem} href="https://read.cv/teams/intdev" target="_blank">
              Read CV Page
            </a>
            <a className={styles.footerItem} href="/team">
              Team Page
            </a>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-terms-of-service" target="_blank">
              Terms of Use
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.caption}>
            <Link href="#we-are-excited-to-work-together">⭡ Back to top</Link>
          </div>
          <div className={styles.copyright}>
            <span>Copyright © 2024. All rights reserved.</span>
          </div>
          <div className={styles.caption}>
            <Link href={`https://github.com/internet-development/www`}>⭣ View source code</Link>
          </div>
          <div className={styles.caption}>
            <Bluesky href={`https://bsky.app/profile/internetstudio.bsky.social`} target="_blank" style={{ marginRight: `24px` }} />
            <GitHub href={`https://github.com/internet-development`} target="_blank" style={{ marginRight: `24px` }}>
              GitHub
            </GitHub>
            <Instagram href={`https://www.instagram.com/internetdevelopmentstudio/`} target="_blank" style={{ marginRight: `24px` }}>
              Instagram
            </Instagram>
            <Telegram href={`https://t.me/internetdevelopmentstudio`} target="_blank" style={{ marginRight: `24px` }}>
              Telegram
            </Telegram>
            <X href={`https://x.com/internetxstudio`} target="_blank">
              X
            </X>
          </div>
        </div>
      </footer>
    </>
  );
}
