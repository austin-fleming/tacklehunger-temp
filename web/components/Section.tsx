/* eslint-disable react/no-multi-comp */
import React from 'react';
import styled from '@emotion/styled';
import { PortableText, urlFor } from '../config/sanity';
import { Cta } from './Cta';
import { SectionElement } from './SectionElement';

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

const CentralRowWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  .image-and-text-area {
    max-width: 50%;
  }
`;

const BlockHeading = ({ blocks }) => (
    <div className='top row'>
      <PortableText blocks={blocks} />
    </div>
  );
const HeadingBelow = ({ headingBelow }) => {
  if (!headingBelow) return null;
  return (
    <div className='top row'>
      <PortableText blocks={headingBelow} />
    </div>
  );
};

const CentralRow = ({ headingLeft, headingRight, image }) => (
  <CentralRowWrapper className='center row'>
    {headingLeft && (
      <div>
        <PortableText blocks={headingLeft} />
      </div>
    )}
    {image && (
      <div className='image-and-text-area'>
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
              <div>
                <div>
                  <div>{image.caption}</div>
                </div>
              </div>
            </figcaption>
          )}
        </figure>
      </div>
    )}
    {headingRight && (
      <div>
        <PortableText blocks={headingRight} />
      </div>
    )}
  </CentralRowWrapper>
);

export const Section: React.FC<SectionProps> = ({
  backgroundImage,
  ctaButtons,
  headingAbove,
  headingBelow,
  headingLeft,
  headingRight,
  image,
  text,
  ...props
}) => {
  const backgroundImageUrl = urlFor(backgroundImage);
  console.log(ctaButtons);
  return (
    <SectionElement {...{ backgroundImage, backgroundImageUrl }}>
      {headingAbove && <BlockHeading blocks={headingAbove} />}
      <CentralRow {...{ headingLeft, headingRight, image }} />
      <HeadingBelow {...{ headingBelow }} />
      {text && <PortableText blocks={text} />}
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
