import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import GridOverlay from '@components/GridOverlay';
import V2SectionClients from '@sections/V2SectionClients';
import V2SectionHero from '@sections/V2SectionHero';
import V2SectionProcess from '@sections/V2SectionProcess';
import V2Wrapper from '@sections/V2Wrapper';

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
      <V2Wrapper footerImageSRC="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2bfeb476-9897-4a55-8f82-9ad4f1648150.png">
        <V2SectionHero />
        <V2SectionClients />
        <V2SectionProcess />
      </V2Wrapper>
    </DefaultLayout>
  );
}
