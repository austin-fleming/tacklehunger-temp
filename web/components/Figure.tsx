import React from 'react';

type FigureProps = {
  node: {
    alt: string;
    asset: { _ref: string };
    caption: string;
  };
};

export const Figure: React.FC<FigureProps> = ({ node: { alt, caption, asset } }) =>
  asset ? (
    <figure>
      <img alt={alt} src={asset} />
      {caption && (
        <figcaption>
          <div>
            <div>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  ) : null;
