import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';

import SectionNavigation from '@sections/SectionNavigation';
import SectionFooter from '@sections/SectionFooter';
import SectionTeam from '@sections/SectionTeam';
import SectionActions from '@sections/SectionActions';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/team';
  const description = 'Anastasiya Uraleva, Andrew Alimbuyuguen and Jimmy Lee are computer aficionados at heart. They live and breathe making websites and graphics.';
  const url = 'https://internet.dev/team';

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
          <SectionTeam>
            <strong>Anastasiya Uraleva</strong>, <strong>Andrew Alimbuyuguen</strong> and <strong>Jimmy Lee</strong> are computer aficionados at heart. They live and breathe making
            websites and graphics. They look forward to the next opportunity to build alongside teams that are improving the world.
          </SectionTeam>
          <SectionActions title="Work with us" href="/pricing" cta="Learn more">
            We have openings for new clients and partners, check out our prices and figure out if collaboration makes sense for you.
          </SectionActions>
        </div>
      </div>
      <SectionFooter />
    </DefaultLayout>
  );
}
