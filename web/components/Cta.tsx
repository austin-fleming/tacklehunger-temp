import React from 'react';
import styled from '@emotion/styled';
import { PrimaryButton } from 'web/components/Buttons';
import { Link } from './Link';

const CtaButton = styled(PrimaryButton)<{ ctaColor?: string }>`
  height: 70px;
  border-radius: 5px;
  font-size: 25px;

  ${({ ctaColor }) => ctaColor && `background: ${ctaColor};`}
`;

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
      <CtaButton ctaColor={buttonColor?.hex}>{text}</CtaButton>
    </Link>
  ) : (
    <CtaButton ctaColor={buttonColor?.hex} href={link}>
      {text}
    </CtaButton>
  );
