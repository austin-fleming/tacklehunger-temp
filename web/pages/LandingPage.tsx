import React from 'react';
// import groq from 'groq';
import { NextSeo } from 'next-seo';
import { Layout } from '../components/Layout';
import { RenderSections } from '../components/RenderSections';

// const pageQuery = groq`
// *[_type == "route" && slug.current == $slug][0]{
//   page-> {
//     ...,
//     content[] {
//       ...,
//       cta {
//         ...,
//         route->
//       },
//       ctas[] {
//         ...,
//         route->
//       }
//     }
//   }
// }
// `;

export const LandingPage: NextPage<{}> = ({
  title = 'Missing title',
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  config = {},
  slug,
}) => (
  // const openGraphImages = openGraphImage
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

  <Layout config={config}>
    <NextSeo
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
    />
    {content && <RenderSections sections={content} />}
  </Layout>
);

export default LandingPage;
