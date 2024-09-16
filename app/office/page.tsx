import '@root/global.scss';
import styles from '@components/DefaultLayout.module.scss';

import DefaultLayout from '@components/DefaultLayout';
import V2SectionHeroOffice from '@sections/V2SectionHeroOffice';
import V2Wrapper from '@sections/V2Wrapper';
import V2SectionOffice from '@sections/V2SectionOffice';
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
      <V2Wrapper active="OFFICE" footerImageSRC="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/80128075-bf0a-4039-8754-d528587e608d.png">
        <V2SectionHeroOffice />
        <V2SectionOffice />
      </V2Wrapper>
    </DefaultLayout>
  );
}
