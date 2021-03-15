import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { urlFor } from '../config/sanity';
import { Cta } from './Cta';
import SimpleBlockContent from './SimpleBlockContent';

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
  console.log(image);
  const backgroundImageUrl = urlFor(backgroundImage);
  return (
    <Container
      maxWidth='xl'
      style={
        backgroundImage
          ? {
              backgroundImage: `url("${backgroundImageUrl}")`,
              // 'backgroundSize': 'contain',
            }
          : {}
      }>
      <img alt='' src={backgroundImageUrl} style={{ visibility: 'hidden' }} />
      <Grid container xs={12}>
        {headingAbove && (
          <Grid item>
            <SimpleBlockContent blocks={headingAbove} />
          </Grid>
        )}
        <Grid item xs={6}>
          {image && (
            <Grid item xs>
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
            </Grid>
          )}
          {headingRight && (
            <Grid item xs>
              <SimpleBlockContent blocks={headingRight} />
            </Grid>
          )}
        </Grid>
        {headingBelow && (
          <Grid item>
            <SimpleBlockContent blocks={headingBelow} />
          </Grid>
        )}
        {headingLeft && (
          <Grid item>
            <SimpleBlockContent blocks={headingLeft} />
          </Grid>
        )}
        {text && <SimpleBlockContent blocks={text} />}
        {ctaButtons && (
          <Grid item>
            {ctaButtons.map((cta) => (
              // eslint-disable-next-line no-underscore-dangle
              <Cta {...cta} key={cta._key} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
