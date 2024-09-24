import '@root/global.scss';
import '@root/uw.scss';

import DefaultLayout from '@components/DefaultLayout';
import GridOverlay from '@components/GridOverlay';
import V2Wrapper from '@sections/V2Wrapper';
import V2SectionUniversityOfWashington from '@sections/V2SectionUniversityOfWashington';
import V2SectionUniversityOfWashingtonCopy from '@sections/V2SectionUniversityOfWashingtonCopy';

export async function generateMetadata({ params, searchParams }) {
  const title = 'Internet Development Studio - ADA Websites for UW';
  const description = `If your department requires a website that complies with the latest legal standards, is powered by reliable cutting-edge web tooling, and boasts a functional design,
          partner with us.`;
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
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/621ef82e-e2c0-4337-a2b1-629afb827d35.png'],
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
      <V2Wrapper active="UNIVERSITY_OF_WASHINGTON" footerImageSRC="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/40e44b99-bd2f-4685-a33e-e77e6348338a.jpg">
        <V2SectionUniversityOfWashington />
        <V2SectionUniversityOfWashingtonCopy />
      </V2Wrapper>
    </DefaultLayout>
  );
}
