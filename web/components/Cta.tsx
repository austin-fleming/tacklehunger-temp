import React from 'react';
import { useTheme } from '@emotion/react';
import { PrimaryButton } from './Buttons';
import { Link } from './Link';

type CtaProps = {
  buttonColor?: { hex?: string };
  link?: string;
  route?: { slug?: { current?: string } };
  text: string;
};

export const Cta: React.FC<CtaProps> = ({ buttonColor, text, route, link }) => {
  const { isMobile } = useTheme();

  const defaultStyle = { background: buttonColor?.hex || 'inherit' };

  const style = isMobile
    ? { ...defaultStyle, fontSize: '14px', padding: '10px 5px', width: '100%' }
    : defaultStyle;

  return route?.slug?.current ? (
    <Link
      as={`/${route.slug.current}`}
      href={{
        pathname: '/LandingPage',
        query: { slug: route.slug.current },
      }}>
      <PrimaryButton style={style}>{text}</PrimaryButton>
    </Link>
  ) : (
    <PrimaryButton href={link} style={style}>
      {text}
    </PrimaryButton>
  );
};
