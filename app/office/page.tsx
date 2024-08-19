import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionFooter from '@sections/SectionFooter';
import SectionOffice from '@sections/SectionOffice';
import SectionOfficeRules from '@sections/SectionOfficeRules';
import SectionActions from '@sections/SectionActions';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/office';
  const description = 'Learn about the office space Internet Development Studio Company works out of.';
  const url = 'https://internet.dev/office';

  return {
    metadataBase: new URL('https://internet.dev/office'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
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
          <SectionOffice />
          <SectionActions title="Manage your account" href="https://users.garden" cta="Manage">
            Manage your account as a member of the Internet Development Studio Company network.
          </SectionActions>
          <SectionOfficeRules />
        </div>
      </div>
      <SectionFooter />
    </DefaultLayout>
  );
}
