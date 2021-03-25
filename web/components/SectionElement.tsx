import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { urlFor } from '../config/sanity';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;

  ${({ dimensions }) =>
    dimensions?.height &&
    css`
      height: ${dimensions.height}px;
    `}

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url('${urlFor(backgroundImage)}');
    `}
`;

export const SectionElement = ({ children, backgroundImage, ...props }) => {
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [dimensions, setDimensions] = React.useState({});

  React.useEffect(() => {
    if (imageRef?.current) {
      const { width, height } = imageRef?.current;
      setDimensions({ height, width });
    }
  }, [imageRef]);

  const needMeasurements = !dimensions?.height;

  return (
    <SectionWrapper {...{ backgroundImage, dimensions, ...props }}>
      {needMeasurements && (
        <img ref={imageRef} alt='' src={urlFor(backgroundImage)} style={{ visibility: 'hidden' }} />
      )}
      {children}
    </SectionWrapper>
  );
};
