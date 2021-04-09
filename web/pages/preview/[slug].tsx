import React from 'react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { IndexPage } from '..';
import { usePreviewSubscription } from '../../config/sanity';
import { Page, SiteConfig } from '../../types/generated/schema';

const pageQuery = groq`{
  "config": *[_type == "site-config"][0],
  "content": *[_type == "page" && slug.current == $slug][0].content
}`;

const PreviewPage: NextPage<SiteConfig & Page> = ({ config, content }) => {
  const { query } = useRouter();

  const { slug } = query;

  const { data } = usePreviewSubscription(pageQuery, {
    enabled: !!slug,
    initialData: { config, content },
    params: { slug },
  });

  return <IndexPage config={data.config} content={data.content} />;
};

export default PreviewPage;
