import React from 'react';
import { PrimaryButton } from './Buttons';
import { Link } from './Link';

type CtaProps = {
  buttonColor?: { hex?: string };
  link?: string;
  route?: { slug?: { current?: string } };
  text: string;
};

export const Cta: React.FC<CtaProps> = ({ buttonColor, text, route, link }) =>
  route?.slug?.current ? (
    <Link
      as={`/${route.slug.current}`}
      href={{
        pathname: '/LandingPage',
        query: { slug: route.slug.current },
      }}>
      <PrimaryButton style={{ background: buttonColor?.hex || 'inherit' }}>{text}</PrimaryButton>
    </Link>
  ) : (
    <PrimaryButton href={link} style={{ background: buttonColor?.hex || 'inherit' }}>
      {text}
    </PrimaryButton>
  );
