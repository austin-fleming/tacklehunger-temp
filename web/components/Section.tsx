/* eslint-disable react/no-multi-comp */
import React from 'react';
import styled from '@emotion/styled';
import { Container, div } from '@material-ui/core';
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

const CenteralRowWrapper = styled.div`
  display: flex;
  figure {
    max-width: 50%;
  }
`;

const HeadingAbove = ({ headingAbove }) => {
  if (!headingAbove) return null;
  console.log(headingAbove);
  return (
    <div className='top row'>
      <PortableText blocks={headingAbove} />
    </div>
  );
};

const CenteralRow = ({ headingLeft, headingRight, image }) => (
  <CenteralRowWrapper className='center row'>
    {headingLeft && (
      <div>
        <PortableText blocks={headingLeft} />
      </div>
    )}
    {image && (
      <div>
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
  </CenteralRowWrapper>
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
}) => {
  const backgroundImageUrl = urlFor(backgroundImage);

  return (
    <SectionElement {...{ backgroundImage, backgroundImageUrl }}>
      <HeadingAbove {...{ headingAbove }} />
      <CenteralRow {...{ headingLeft, headingRight, image }} />
    </SectionElement>
  );

  return (
    <SectionElement maxWidth='xl' {...{ backgroundImage, backgroundImageUrl }}>
      <div container xs={12}>
        {headingAbove && (
          <div item>
            <PortableText blocks={headingAbove} />
          </div>
        )}
        <div item xs={6}>
          {image && (
            <div item xs>
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
            <div item xs>
              <PortableText blocks={headingRight} />
            </div>
          )}
        </div>
        {headingBelow && (
          <div item>
            <PortableText blocks={headingBelow} />
          </div>
        )}
        {headingLeft && (
          <div item>
            <PortableText blocks={headingLeft} />
          </div>
        )}
        {text && <PortableText blocks={text} />}
        {ctaButtons && (
          <div item>
            {ctaButtons.map((cta) => (
              // eslint-disable-next-line no-underscore-dangle
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </SectionElement>
  );
};
