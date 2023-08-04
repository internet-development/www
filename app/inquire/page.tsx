import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionHero from '@sections/SectionHero';
import SectionFooter from '@sections/SectionFooter';
import SectionActions from '@sections/SectionActions';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/inquire';
  const description = 'Look into becoming a client or partner of the Internet Development Studio.';
  const url = 'https://internet.dev/inquire';

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
      <div className={styles.flex}>
        <div className={styles.top}>
          <SectionNavigation />
        </div>
        <div className={styles.bottom}>
          <SectionHero title="We are closed for new clients and partners, for now.">
            We are currently experiencing high demand and will open up inquiries in the near future. Watch this space!
          </SectionHero>
          <SectionActions title="Learn about our pricing" href="/pricing" cta="Learn more">
            When we are available for new clients and partners, we offer a set of services. Learn about how much our services cost and obtain a better sense of what our studio
            offers.
          </SectionActions>
        </div>
      </div>

      <SectionFooter />
    </DefaultLayout>
  );
}
