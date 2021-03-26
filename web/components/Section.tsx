import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PortableText, urlFor } from '../config/sanity';
import { BlockHeading } from './BlockHeading';
import { Cta } from './Cta';
import { serializers } from './serializers';

type SectionProps = {
  backgroundImage: string;
  ctaButtons: Record<string, unknown>[];
  headingAbove: unknown[];
  headingBelow: unknown[];
  headingLeft: unknown[];
  headingRight: unknown[];
  image: {
    alt: string;
    asset: { _ref: string };
    caption: string;
  };
  text: unknown[];
};

const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const SectionContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  object-fit: contain;
`;

const CenterRow = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

export const Section: React.FC<SectionProps> = ({
  backgroundImage,
  ctaButtons,
  headingAbove,
  headingBelow,
  headingLeft,
  headingRight,
  image,
  text,
}) => {
  const width = `${100 / [headingLeft, image, headingRight].filter((el) => !!el).length}%`;

  const { isMobile } = useTheme();
  return (
    <SectionWrapper>
      <BackgroundImage alt='' src={urlFor(backgroundImage)} />
      <SectionContents>
        {headingAbove && <BlockHeading blocks={headingAbove} />}
        <CenterRow>
          {headingLeft && <BlockHeading blocks={headingLeft} style={{ width }} />}
          {image && (
            <div style={{ width }}>
              <figure>
                <img
                  alt={image.alt}
                  src={urlFor(image)}
                  style={{
                    display: 'block',
                    width: '100%',
                  }}
                />
                {image.caption && (
                  <figcaption>
                    <div>{image.caption}</div>
                  </figcaption>
                )}
              </figure>
            </div>
          )}
          {headingRight && (
            <BlockHeading blocks={headingRight} style={{ textAlign: 'right', width }} />
          )}
        </CenterRow>
        {headingBelow && <BlockHeading blocks={headingBelow} />}
        {text && <PortableText blocks={text} serializers={serializers} />}
        {ctaButtons && (
          <div>
            {ctaButtons.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </SectionContents>
    </SectionWrapper>
  );
};
