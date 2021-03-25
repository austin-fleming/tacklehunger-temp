import React from 'react';
import { Button } from '@material-ui/core';
import { PrimaryButton } from 'web/components/Buttons';
import { Link } from './Link';

type CtaProps = {
  link?: string;
  route?: { slug?: { current?: string } };
  text: string;
};

export const Cta: React.FC<CtaProps> = ({ text, route, link }) => {
  if (route?.slug?.current) {
    return (
      <Link
        as={`/${route.slug.current}`}
        href={{
          pathname: '/LandingPage',
          query: { slug: route.slug.current },
        }}>
        <Button variant='contained'>{text}</Button>
      </Link>
    );
  }

  return <PrimaryButton href={link || ''}>{text}</PrimaryButton>;
};
