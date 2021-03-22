import React from 'react';
import Link from 'next/link';

type CtaProps = {
  link?: string;
  route?: { slug?: { current?: string } };
  title: string;
};

export const Cta: React.FC<CtaProps> = ({ title, route, link }) => {
  console.log(title, route, link);
  if (route?.slug?.current) {
    return (
      <Link
        as={`/${route.slug.current}`}
        href={{
          pathname: '/LandingPage',
          query: { slug: route.slug.current },
        }}>
        <a>{title}</a>
      </Link>
    );
  }

  if (link) {
    return <a href={link}>{title}</a>;
  }

  return <a>{title}</a>;
};
