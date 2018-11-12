import React from 'react';
import styled, { keyframes } from 'react-emotion/macro';

let shared = `
  font-size: 75px;
  user-select: none;
  position: absolute;
`;

let Cloud = styled.div`
  ${shared}
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

let rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

let Sun = styled.div`
  ${shared}
  top: 5vw;
  right: 5vw;
  animation: ${rotate} 60s linear infinite;
`;

let Clouds = () => {
  return new Array(Math.ceil(Math.random() * 5)).fill(null).map((cloud, i) => (
    <Cloud key={i} top={Math.random() * 100} left={Math.random() * 100}>
      ☁️
    </Cloud>
  ));
};

let Background = React.memo(() => (
  <div>
    <Sun>☀️</Sun>
    <Clouds />
  </div>
));

export default Background;
