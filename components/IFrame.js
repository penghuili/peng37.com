import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: block;
  border: 3px solid rgb(218, 218, 218);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  box-sizing: content-box;
  overflow: hidden;
`;

function IFrame({
  src,
  width = 290,
  innerWidth = 290,
  height,
  padding = 0,
  margin = '0 0 8px',
  title,
  id,
}) {
  return (
    <Wrapper width={width} height={height} padding={padding} margin={margin}>
      <iframe
        src={src}
        width={innerWidth}
        height={height}
        frameBorder="0"
        scrolling="no"
        title={title}
        id={id}
      />
    </Wrapper>
  );
}

export default IFrame;
