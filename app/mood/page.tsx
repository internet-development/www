import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionMoodBoard from '@sections/SectionMoodBoard';
import SectionFooter from '@sections/SectionFooter';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/mood';
  const description = 'A mood board.';
  const url = 'https://internet.dev/mood';

  return {
    metadataBase: new URL('https://internet.dev/mood'),
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
  const response = await fetch('https://api.internet.dev/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'MOOD', organization_id: '681ba857-7127-465f-b7cb-bf467ce6d57b' }),
  });
  const parsed = await response.json();

  return (
    <DefaultLayout>
      <div className={styles.flex}>
        <div className={styles.top}>
          <SectionNavigation />
        </div>
        <div className={styles.bottom}>
          <SectionMoodBoard data={parsed.data} />
        </div>
      </div>
      <SectionFooter />
    </DefaultLayout>
  );
}
