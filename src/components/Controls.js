import React, { Component } from 'react';
import styled from 'react-emotion/macro';

import EmojiButton from './EmojiButton';
import {
  SPACING,
  FONT_SIZE,
  BUTTON_PADDING,
  MIN_SPEED,
  MAX_SPEED
} from '../constants';

let Container = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.75);
`;

let Score = styled.div`
  font-size: ${FONT_SIZE * SPACING}px;
  padding: 0 ${BUTTON_PADDING * SPACING}px;
`;

let Speed = styled.div`
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
          <SpeedButton
            onClick={() => this.props.setSpeed(MIN_SPEED)}
            tabIndex={this.props.isPlaying ? -1 : 0}
          >
            🐢
          </SpeedButton>
          <Range
            type="range"
            min={MIN_SPEED}
            max={MAX_SPEED}
            step="5"
            value={this.props.speed}
            onChange={this.handleSetSpeed}
            tabIndex={this.props.isPlaying ? -1 : 0}
          />
          <SpeedButton
            onClick={() => this.props.setSpeed(MAX_SPEED)}
            tabIndex={this.props.isPlaying ? -1 : 0}
          >
            🐇
          </SpeedButton>
        </Speed>

        {!!this.props.score && (
          <Score>{this.props.score.toLocaleString()}</Score>
        )}
      </Container>
    );
  }
}
