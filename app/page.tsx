import { Metadata } from 'next';

import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionHero from '@sections/SectionHero';
import SectionHeroImage from '@sections/SectionHeroImage';
import SectionActions from '@sections/SectionActions';
import SectionTestimonials from '@sections/SectionTestimonials';
import SectionFeatures from '@sections/SectionFeatures';
import SectionProject from '@sections/SectionProject';
import SectionFooter from '@sections/SectionFooter';
import SectionQuote from '@sections/SectionQuote';

export async function generateMetadata({ params, searchParams }) {
  const title = 'Internet Development Studio';
  const description = 'Internet Development Studio is an engineering and design team based out of Seattle—WA, Boston—MA, and New York—NY. We design, brand, market and code.';
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
        <div className={styles.bottom}>
          <SectionHero
            title={
              <>
                <strong>Internet Development Studio</strong> is an engineering and design team based out of <strong>Seattle—WA</strong>, <strong>Boston-MA</strong> and{' '}
                <strong>New York—NY</strong>. We design, brand, market and code.
              </>
            }
          >
            We help you develop, launch, and manage the work. Avoid recruiting an expensive in-house design or development team from scratch. Get projects completed case-by-case,
            or have us embed with you, your team, or your company.
          </SectionHero>

          <SectionHeroImage src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ecfda005-3da8-4066-8520-61f0533226a6.jpg" />

          <SectionActions title="Become a client or partner" href="/pricing" cta="Learn more">
            We may have openings for new clients and full time partnerships, check out our prices and figure out if collaboration makes sense for you.
          </SectionActions>
        </div>
      </div>
      <SectionTestimonials />
      <SectionFeatures />
      <SectionActions title="Hire us for your next project" href="/inquire" cta="Learn more">
        Want to start the conversation? Lets work through a questionaire to determine if this will be a fit
      </SectionActions>
      <SectionProject />
      <SectionQuote>
        We are with you every step of the way. We're prepared to build it all on our own, collaborate with your ecosystem peers, or hand off the work to you or any other team.
      </SectionQuote>
      <SectionFooter />
    </DefaultLayout>
  );
}
