import React, { Component } from 'react';
import styled from 'react-emotion/macro';

import EmojiButton from './EmojiButton';
import { SPACING, MIN_SPEED, MAX_SPEED } from '../constants';

let Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.75);
`;

let Score = styled.div`
  font-size: ${SPACING * 6}px;
  padding: ${SPACING * 2}px;
`;

let Speed = styled.div`
  padding: 0 ${SPACING * 4}px;
  flex-grow: 1;
  display: flex;
  transition: 0.3s cubic-bezier(0.17, 0.89, 0.32, 1.28);
  transform: translateY(${props => (props.isPlaying ? 100 : 0)}%);
`;

let SpeedButton = styled(EmojiButton)`
  flex-shrink: 0;
`;

let Range = styled.input`
  width: 100%;
`;

export default class Controls extends Component {
  handleSetSpeed = e => {
    this.props.setSpeed(e.target.value);
  };

  render() {
    return (
      <Container>
        <EmojiButton onClick={this.props.togglePlay}>
          {this.props.isPlaying ? '⏸' : '▶️'}
        </EmojiButton>

        <Speed isPlaying={this.props.isPlaying}>
          <SpeedButton onClick={() => this.props.setSpeed(MIN_SPEED)}>
            🐢
          </SpeedButton>
          <Range
            type="range"
            min={MIN_SPEED}
            max={MAX_SPEED}
            step="5"
            value={this.props.speed}
            onChange={this.handleSetSpeed}
          />
          <SpeedButton onClick={() => this.props.setSpeed(MAX_SPEED)}>
            🐇
          </SpeedButton>
        </Speed>

        <Score>{this.props.score}</Score>
      </Container>
    );
  }
}
