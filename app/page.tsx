import { Metadata } from 'next';

import '@root/global.scss';
import styles from '@components/Marketing.module.scss';

import Button from '@components/Button';
import Bluesky from '@components/svg/Bluesky';
import DefaultLayout from '@components/DefaultLayout';
import GitHub from '@components/svg/GitHub';
import Instagram from '@components/svg/Instagram';
import Logo from '@components/Logo';
import Telegram from '@components/svg/Telegram';
import V2SectionClients from '@sections/V2SectionClients';
import V2SectionCaption from '@sections/V2SectionCaption';
import V2SectionHero from '@sections/V2SectionHero';
import V2SectionProcess from '@sections/V2SectionProcess';
import X from '@components/SVG/X';

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
    <a href={props.href} target={props.target} className={styles.link}>
      {props.children}
    </a>
  );
};

export default async function Page(props) {
  const response = await fetch('https://wireframes.internet.dev/api');
  const json = await response.json();

  let samples = [];
  if (json && json.data && json.data.length) {
    samples = [...json.data];
  }

  return (
    <DefaultLayout>
      <header className={styles.top}>
        <div className={styles.left}>
          <Logo height="24px" href="/" />
        </div>
        <div className={styles.right}>
          <Link href="https://wireframes.internet.dev">↗ Public work samples</Link>
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
          <Link href={`/pricing`}>↘ Team pricing</Link>
          <Link href={`/office`}>↘ Co-working details</Link>
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

      <V2SectionHero />
      <V2SectionClients />
      <V2SectionProcess />

      <img
        alt="The Internet Development Studio Company team hanging out outside"
        className={styles.image}
        src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2bfeb476-9897-4a55-8f82-9ad4f1648150.png"
      />

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
            <a className={styles.footerItem} href="https://users.garden">
              Users
            </a>
            <a className={styles.footerItem} href="https://beautifulthings.xyz">
              Beautiful Things
            </a>
            <a className={styles.footerItem} href="https://txt.dev">
              TXT
            </a>
            <span className={styles.footerItemPending} href="#">
              Analytics (coming soon)
            </span>
            <span className={styles.footerItemPending} href="#">
              Diagrams (coming soon)
            </span>
            <span className={styles.footerItemPending} href="#">
              Assets (coming soon)
            </span>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Information</div>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-acceptable-use" target="_blank">
              Acceptable Use
            </a>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-privacy-policy" target="_blank">
              Privacy Policy
            </a>
            <a className={styles.footerItem} href="https://txt.dev/wwwjim/intdev-terms-of-service" target="_blank">
              Terms of Use
            </a>
            <a className={styles.footerItem} href="/team">
              Team
            </a>
            <a className={styles.footerItem} href="/pricing">
              Pricing
            </a>
            <a className={styles.footerItem} href="/office">
              Office
            </a>
            <a className={styles.footerItem} href="https://read.cv/teams/intdev" target="_blank">
              Read CV
            </a>

            <a className={styles.footerItem} href="https://www.linkedin.com/company/internet-dev" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.caption}>
            <Link href="/">⬆ Back to top</Link>
          </div>
          <div className={styles.copyright}>
            <span>Copyright © 2024. All rights reserved.</span>
          </div>
          <div className={styles.caption}>
            <Link href={`https://github.com/internet-development/www`}>⬇ View source code</Link>
          </div>
          <div className={styles.caption}>
            <Telegram href={`https://t.me/internetdevelopmentstudio`} target="_blank" style={{ marginRight: `24px` }}>
              Telegram
            </Telegram>
            <GitHub href={`https://github.com/internet-development`} target="_blank" style={{ marginRight: `24px` }}>
              GitHub
            </GitHub>
            <Bluesky href={`https://bsky.app/profile/internetstudio.bsky.social`} target="_blank" style={{ marginRight: `24px` }} />
            <X href={`https://x.com/internetxstudio`} target="_blank" style={{ marginRight: `24px` }}>
              X
            </X>
            <Instagram href={`https://www.instagram.com/internetdevelopmentstudio/`} target="_blank">
              Instagram
            </Instagram>
          </div>
        </div>
      </footer>
    </DefaultLayout>
  );
}
