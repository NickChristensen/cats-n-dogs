import React, { Component } from 'react';
import styled, { keyframes } from 'react-emotion/macro';

let fall = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(calc(100vh + 100px)) }
`;

let FallingAnimal = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => props.xPosition}%;
  top: 0;
  animation: ${fall} ${props => props.duration}s linear forwards;
  animation-play-state: ${props => props.isPlaying ? 'running' : 'paused'};
  cursor: ${props => props.isPlaying ? 'grab' : 'not-allowed'};

  :active {
    cursor: ${props => props.isPlaying ? 'grabbing' : 'not-allowed'};
  }
`;

let rotateCounterClockWise = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(-360deg) }
`;

let rotatateClockWise = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

let RotatingAnimal = styled.div`
  position: absolute;
  bottom: 0;
  font-size: ${props => props.size}px;
  animation: ${props => props.clockWise ? rotatateClockWise : rotateCounterClockWise} ${props => props.duration}s linear infinite;
`;

export default class Animal extends Component {
  handleClick = () => {
    if(!this.props.isPlaying) return;
    this.props.rescue(this.props.id, this.props.points);
  }

  handleAnimationEnd = () => {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <FallingAnimal
        onClick={this.handleClick}
        onAnimationEnd={this.handleAnimationEnd}
        isPlaying={this.props.isPlaying}
        xPosition={this.props.xPosition}
        duration={this.props.fallDuration}
      >
        <RotatingAnimal
          duration={this.props.rotationDuration}
          clockWise={this.props.rotateClockWise}
          size={this.props.size}
        >
          {this.props.type}
        </RotatingAnimal>
      </FallingAnimal>
    );
  }
}