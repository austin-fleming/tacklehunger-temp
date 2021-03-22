import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { urlFor } from '../config/sanity';

export const SectionElement = ({ children, backgroundImage, ...props }) => {
  const imageRef = React.useRef<HTMLImageElement>();
  const [dimensions, setDimensions] = React.useState({});

  React.useEffect(() => {
    if (imageRef?.current) {
      const { width, height } = imageRef?.current;
      setDimensions({ height, width });
    }
  }, [imageRef]);

  return (
    <SectionWrapper {...{ backgroundImage, dimensions, ...props }}>
      {!dimensions?.height && (
        <img ref={imageRef} alt='' src={urlFor(backgroundImage)} style={{ visibility: 'hidden' }} />
      )}
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ dimensions }) =>
    dimensions?.height &&
    css`
      height: ${dimensions.height}px;
      width: ${dimensions.width}px;
    `}
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url('${urlFor(backgroundImage)}');
    `}
`;
