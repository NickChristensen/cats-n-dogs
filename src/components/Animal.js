import React, { Component } from 'react';
import styled, { keyframes } from 'react-emotion/macro';
import Transition from 'react-transition-group/Transition';

const ANIMAL_EXIT_DURATION = 200;

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

let RemoveableAnimal = styled.div`
  transition-property: transform, opacity;
  transition-duration: ${ANIMAL_EXIT_DURATION}ms;
  transition-timing-function: ease-in;
  transform: scale(${props => props.status === 'exiting' ? 3 : 1});
  opacity: ${props => props.status === 'exiting' ? 0 : 1};
`;

export default class Animal extends Component {
  state = { isRescued: false };

  handleClick = () => {
    if(!this.props.isPlaying) return;
    this.setState({ isRescued: true });
  }

  handleExited = () => {
    this.props.rescue(this.props.id, this.props.points);
  }

  handleOffScreen = () => {
    this.props.remove(this.props.id);
  }

  render() {
    // This is way too many nested divs! But it's a good way to compose multiple transforms on the same visual element.
    return (
      <FallingAnimal
        onClick={this.handleClick}
        onAnimationEnd={this.handleOffScreen}
        isPlaying={this.props.isPlaying}
        xPosition={this.props.xPosition}
        duration={this.props.fallDuration}
      >
        <RotatingAnimal
          duration={this.props.rotationDuration}
          clockWise={this.props.rotateClockWise}
          size={this.props.size}
        >
          <Transition timeout={ANIMAL_EXIT_DURATION} in={!this.state.isRescued} onExited={this.handleExited}>
            {status => <RemoveableAnimal status={status}>{this.props.type}</RemoveableAnimal>}
          </Transition>
        </RotatingAnimal>
      </FallingAnimal>
    );
  }
}