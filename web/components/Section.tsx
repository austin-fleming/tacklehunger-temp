import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { PortableText, urlFor } from '../config/sanity';
import { BlockHeading } from './BlockHeading';
import { Cta } from './Cta';
import { SectionElement } from './SectionElement';
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

const CenterRow = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
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
  const width = 100 / [headingLeft, image, headingRight].filter((el) => !!el).length;

  return (
    <SectionElement backgroundImage={backgroundImage}>
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
    </SectionElement>
  );
};
