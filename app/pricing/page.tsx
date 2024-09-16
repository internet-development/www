import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import GridOverlay from '@components/GridOverlay';
import V2SectionHeroPricing from '@sections/V2SectionHeroPricing';
import V2SectionPricingDetails from '@sections/V2SectionPricingDetails';
import V2Wrapper from '@sections/V2Wrapper';

export async function generateMetadata({ params, searchParams }) {
  const title = 'internet.dev/pricing';
  const description = 'Check out our offering around mockups, websites, web applications, and team embedding.';
  const url = 'https://internet.dev/pricing';

  return {
    metadataBase: new URL('https://internet.dev/pricing'),
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
      <V2Wrapper active="PRICING" footerImageSRC="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2bfeb476-9897-4a55-8f82-9ad4f1648150.png">
        <V2SectionHeroPricing />
        <V2SectionPricingDetails />
      </V2Wrapper>
    </DefaultLayout>
  );
}
