import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { RenderSections } from '../components/RenderSections';
import { Page, SiteConfig } from '../types/generated/schema';

// TODO: import { NextSeo } from 'next-seo';

export const IndexPage: NextPage<SiteConfig & Page> = ({
  // title = 'Missing title',
  // description,
  // disallowRobots,
  // openGraphImage,
  content,
  config,
}) => (
  <Layout config={config}>
    {/* <NextSeo
      config={{
        canonical: config.url && `${config.url}/${slug}`,
        description,
        noindex: disallowRobots,
        // openGraph: {
        //   images: openGraphImages,
        // },
        title,
        titleTemplate: `${config.title} | %s`,
      }}
    /> */}
    {content && <RenderSections sections={content} />}
  </Layout>
);

export default IndexPage;

// TODO: const openGraphImages = openGraphImage
//   ? [
//       {
//         alt: title,
//         height: 600,
//         url: builder.image(openGraphImage).width(800).height(600).url(),
//         width: 800,
//       },
//       // Facebook recommended size
//       {
//         alt: title,
//         height: 630,
//         url: builder.image(openGraphImage).width(1200).height(630).url(),
//         width: 1200,
//       },
//       // Square 1:1
//       {
//         alt: title,
//         height: 600,
//         url: builder.image(openGraphImage).width(600).height(600).url(),
//         width: 600,
//       },
//     ]
//   : [];
