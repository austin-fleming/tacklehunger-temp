import React from 'react';
import { Container, Grid } from '@material-ui/core';
import imageUrlBuilder from '@sanity/image-url';
import PropTypes from 'prop-types';
import Cta from './Cta';
import styles from './Section.module.css';
import SimpleBlockContent from './SimpleBlockContent';

const Section = ({
  backgroundImage,
  ctaButtons,
  headingAbove,
  headingBelow,
  headingLeft,
  headingRight,
  image,
  label,
  text,
}) => {
  console.log(image);
  return (
    <Container
      maxWidth='xl'
      style={
        backgroundImage
          ? {
              'background-image': `url("${urlFor(backgroundImage)}")`,
              // 'background-size': 'contain',
            }
          : {}
      }>
      <img src={urlFor(backgroundImage)} style={{ visibility: 'hidden' }} />
      {/* <Grid container xs={12}>
        {headingAbove && (
          <Grid item className={styles.title}>
            <SimpleBlockContent blocks={headingAbove} />
          </Grid>
        )}
        <Grid item xs={6}>
          {image && (
            <Grid item xs>
              <figure className={styles.content}>
                <img
                  src={urlFor(image)}
                  style={{
                    display: 'block',
                    width: '100%',
                  }}
                  alt={image.alt}
                />
                {image.caption && (
                  <figcaption>
                    <div className={styles.caption}>
                      <div className={styles.captionBox}>
                        <div className={styles.label}>{image.caption}</div>
                      </div>
                    </div>
                  </figcaption>
                )}
              </figure>
            </Grid>
          )}
          {headingRight && (
            <Grid item className={styles.title} xs>
              <SimpleBlockContent blocks={headingRight} />
            </Grid>
          )}
        </Grid>
        {headingBelow && (
          <Grid item className={styles.title}>
            <SimpleBlockContent blocks={headingBelow} />
          </Grid>
        )}
        {headingLeft && (
          <Grid item className={styles.title}>
            <SimpleBlockContent blocks={headingLeft} />
          </Grid>
        )}
        {text && <SimpleBlockContent blocks={text} />}
        {ctaButtons && (
          <Grid item className={styles.ctas}>
            {ctaButtons.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </Grid>
        )}
      </Grid> */}
    </Container>
  );
};

Section.propTypes = {
  backgroundImage: PropTypes.string,
  ctaButtons: PropTypes.arrayOf(PropTypes.object),
  headingAbove: PropTypes.array,
  headingBelow: PropTypes.array,
  headingLeft: PropTypes.array,
  headingRight: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  label: PropTypes.string,
  text: PropTypes.array,
};

export default Section;
