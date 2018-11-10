import React, { Component } from 'react';
import styled from 'react-emotion/macro';

import Controls from './Controls';
import Stage from './Stage';
import Background from './Background';
import { DEFAULT_SPEED } from '../constants';

let Container = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
`;

export default class Game extends Component {
  state = {
    isPlaying: false,
    speed: DEFAULT_SPEED,
    score: 0
  };

  handleTogglePlay = () => {
    this.setState(state => ({ isPlaying: !state.isPlaying }));
  };

  handleSetSpeed = speed => {
    this.setState({ speed });
  };

  incrementScore = points => {
    this.setState(state => ({ score: state.score + points }));
  };

  render() {
    return (
      <Container>
        <Background />
        <Stage
          isPlaying={this.state.isPlaying}
          speed={this.state.speed}
          incrementScore={this.incrementScore}
        />
        <Controls
          isPlaying={this.state.isPlaying}
          togglePlay={this.handleTogglePlay}
          speed={this.state.speed}
          setSpeed={this.handleSetSpeed}
          score={this.state.score}
        />
      </Container>
    );
  }
}
