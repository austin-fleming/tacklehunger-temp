import React from 'react';
import groq from 'groq';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import RenderSections from '../components/RenderSections';
import { sanityClient } from '../sanity';

const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`;

// TODO: improve types
type LandingPageProps = {
  config: any;
  content: any;
  description: string;
  disallowRobots: any;
  openGraphImage: any;
  slug: any;
  title: string;
};

type LandingPageParams = ParsedUrlQuery & { query: any };

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.query) {
    console.error('no query');
    return null;
  }
  const { slug } = context.query;
  if (slug && slug !== '/') {
    return sanityClient.fetch(pageQuery, { slug }).then((res) => ({ ...res.page, slug }));
  }

  // Frontpage
  if (slug && slug === '/') {
    return sanityClient
      .fetch(
        groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ...,
            content[] {
              ...,
              cta {
                ...,
                route->
              },
              ctas[] {
                ...,
                route->
              }
            }
          }
        }
      `
      )
      .then((res) => ({ ...res.frontpage, slug }));
  }

  return null;
};

export const LandingPage: NextPage<{}> = ({
  title = 'Missing title',
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  config = {},
  slug,
}) => {
  const openGraphImages = openGraphImage
    ? [
        {
          alt: title,
          height: 600,
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
        },
        // Facebook recommended size
        {
          alt: title,
          height: 630,
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
        },
        // Square 1:1
        {
          alt: title,
          height: 600,
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
        },
      ]
    : [];

  return (
    <Layout config={config}>
      <NextSeo
        config={{
          canonical: config.url && `${config.url}/${slug}`,
          description,
          noindex: disallowRobots,
          openGraph: {
            images: openGraphImages,
          },
          title,
          titleTemplate: `${config.title} | %s`,
        }}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  );
};

export default LandingPage;
