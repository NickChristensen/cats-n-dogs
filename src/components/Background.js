import React from 'react';
import styled from 'react-emotion/macro';

const Cloud = styled.div`
  font-size: 75px;
  user-select: none;
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const Sun = styled.div`
  font-size: 75px;
  user-select: none;
  position: absolute;
  top: 5vw;
  right: 5vw;
`;

const Clouds = React.memo(() => {
  return new Array(Math.ceil(Math.random() * 5)).fill(null).map((cloud, i) => (
    <Cloud
      key={i}
      top={Math.random() * 100}
      left={Math.random() * 100}
    >☁️</Cloud>
  ));
});

const Background = () => (
  <div>
    <Sun>☀️</Sun>
    <Clouds />
  </div>
);
 
export default Background;