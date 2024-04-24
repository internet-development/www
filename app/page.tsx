import { Metadata } from 'next';

import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionActions from '@sections/SectionActions';
import SectionFooter from '@sections/SectionFooter';
import SectionNavigation from '@sections/SectionNavigation';
import SectionProject from '@sections/SectionProject';
import SectionQuote from '@sections/SectionQuote';

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

export default async function Page(props) {
  return (
    <DefaultLayout>
      <div className={styles.flex}>
        <div className={styles.top}>
          <SectionNavigation />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>American Internet Experience Design & Webmaster Practice</h1>
        <h4 className={styles.sub}>&nbsp;⎯⊹ Andrew Alimbuyuguen, Elijah Seed Arita, Jimmy Lee, Anastasiya Uraleva, Xiangan He, and Friends</h4>
        <p className={styles.p} style={{ marginTop: `4rem` }}>
          The Internet Development Studio Company ("INTDEV") of Seattle, WA is home to a group of American internet designers and webmasters building for the international internet
          community. Our team specializes in design, branding, marketing, and coding. We are dedicated to helping you develop, launch, and manage your projects.
        </p>{' '}
        <p className={styles.p}>
          By partnering with INTDEV, you can avoid the process of recruiting an in-house design or development team from scratch. We offer the flexibility to work on projects on a
          case-by-case basis or embed with you, your team, or your company. Our diverse client portfolio includes venture-backed startups from incubators like Mana Industries,
          Y-Combinator, and Protocol Labs, as well as organizations like Google.
        </p>
        <p className={styles.p}>
          At INTDEV, we believe in harnessing the power of the design process to create a better internet experience for all. Our design approach combines self-directed learning,
          understanding complex systems, and embracing simplicity. By continuously seeking knowledge and taking control of our education, we develop a deep understanding of the
          internet and the world that shapes it. This understanding is essential for creating meaningful, impactful designs that leave lasting results.
        </p>
        <p className={styles.p}>
          To deliver a great experience on the internet, we recognize the interconnectedness of people surfing the World Wide Web ("WWW") and the importance of creating cohesive
          and adaptive systems that give individuals engaging with the WWW a sense of place. We strive to strip away the unnecessary and focus on the essential to create designs
          that are both functional and emotionally resonant. It is not simply about aesthetics or making things pretty; it's about creating experiences that help clarify purpose.
          We help you be more simple and direct.
        </p>
        <p className={styles.p}>
          Above all else, we are committed to using our skills and knowledge to create a positive impact on the world. We seek to design solutions that helps humanity make
          progress. Many of our clients work on themes that align with our values, such as combating climate change, fostering collaboration, and reducing the cost of maintaining
          health. We are proud to contribute to these important causes through our craft.
        </p>
        <p className={styles.p}>
          Thank you for taking the time to learn about INTDEV. We look forward to the opportunity to work together and create meaningful, impactful designs that make a difference
          in this international space we all share.
        </p>
      </div>

      <SectionActions title="Hire us" href="/inquire" cta="Learn more">
        Want to start the conversation? Lets work through a questionaire to determine if this will be a fit
      </SectionActions>
      <SectionProject />
      <SectionQuote>Let's work together. We will build great software with you, every step of the way.</SectionQuote>
      <SectionFooter />
    </DefaultLayout>
  );
}
