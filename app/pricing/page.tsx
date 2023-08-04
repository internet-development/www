import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionFooter from '@sections/SectionFooter';
import SectionPricing from '@sections/SectionPricing';
import SectionHero from '@sections/SectionHero';
import SectionActions from '@sections/SectionActions';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/pricing';
  const description = 'Check out our offering around mockups, websites, web applications, and team embedding.';
  const url = 'https://internet.dev/pricing';

  return {
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
      <div className={styles.top}>
        <SectionNavigation />
      </div>

      <SectionPricing />
      <SectionActions title="Work with us" href="/inquire" cta="Learn more">
        We have openings for new clients and partners, check out our prices and figure out if collaboration makes sense for you.
      </SectionActions>
      <SectionFooter />
    </DefaultLayout>
  );
}
