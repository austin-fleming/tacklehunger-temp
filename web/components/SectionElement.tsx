import React from 'react';
import styled from '@emotion/styled';
import { urlFor } from '../config/sanity';

export const SectionElement = ({ children, backgroundImage, ...props }) => {
  const imageRef = React.useRef();
  const [dimensions, setDimensions] = React.useState({});

  React.useEffect(() => {
    if (imageRef?.current) {
      const { width, height } = imageRef?.current;
      setDimensions({ height, width });
    }
  }, [imageRef]);

  return (
    <SectionWrapper {...{ backgroundImage, dimensions, ...props }}>
      <img ref={imageRef} alt='' src={urlFor(backgroundImage)} style={{ visibility: 'hidden' }} />
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  ${({ dimensions }) =>
    dimensions.height &&
    `
    height: ${dimensions.height}px;
    width: ${dimensions.width}px;
  `}
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url("${urlFor(backgroundImage)}");
  `}
`;
