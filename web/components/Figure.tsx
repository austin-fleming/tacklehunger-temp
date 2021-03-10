import React from 'react';
import { urlFor } from '../config/sanity';
import styles from './Figure.module.css';

const Figure = ({ node }) => {
  const { alt, caption, asset } = node;
  if (!asset) {
    return undefined;
  }
  return (
    <figure className={styles.content}>
      <img alt={alt} className={styles.image} src={urlFor(asset)} />
      {caption && (
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
};

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
    caption: PropTypes.string,
  }),
};
export default Figure;
