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

const CentralRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  .image-and-text-area {
    max-width: 50%;
  }
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
  const [imageSize, setImageSize] = useState(undefined);

  const imgRef = useRef(null);
  useEffect(() => {
    try {
      if (imgRef?.current?.offsetWidth) {
        setImageSize(imgRef.current.offsetWidth);
      }
    } catch (e) {
      console.error(e);
    }
  }, [imgRef]);

  return (
    <SectionElement backgroundImage={backgroundImage}>
      {headingAbove && <BlockHeading blocks={headingAbove} />}
      <CentralRow>
        {headingLeft && <BlockHeading blocks={headingLeft} />}
        {image && (
          <div ref={imgRef}>
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
          <BlockHeading
            blocks={headingRight}
            style={{ textAlign: 'right', width: imageSize || undefined }}
          />
        )}
      </CentralRow>
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
