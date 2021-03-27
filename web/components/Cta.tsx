import React from 'react';
import { useTheme } from '@emotion/react';
import { CtaButton, Route } from '../types/generated/schema';
import { PrimaryButton } from './Buttons';
import { Link } from './Link';

export const Cta: React.FC<CtaButton & { route: Omit<Route, '_type'> }> = ({
  buttonColor,
  text,
  route,
  link,
}) => {
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
