import React, { Component } from 'react';
import styled from 'react-emotion/macro';

import Animal from './Animal';
import { pointsToSize, speedToDuration } from '../utils';

let Container = styled.div`
  height: 100%;
  margin-right: 100px;
  position: relative;
  user-select: none;
`;

let createRandomAnimal = props => {
  let type = Math.random() >= 0.5 ? '🐕' : '🐈';
  let rotationDuration = Math.random() * 50 + 5;
  let rotateClockWise = Math.random() >= 0.5;
  let points = Math.ceil(Math.random() * 10);
  let xPosition = Math.random() * 100;
  let size = pointsToSize(points);
  let fallDuration = speedToDuration(props.speed, window.innerHeight + 100);

  return {
    type,
    rotationDuration,
    rotateClockWise,
    points,
    xPosition,
    size,
    fallDuration
  };
};

export default class Stage extends Component {
  state = {
    secondsPlayed: 0,
    animals: []
  };

  componentDidMount() {
    window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.tick);
  }

  handleRescue = (id, points) => {
    this.props.incrementScore(points);
    this.handleRemove(id);
  };

  handleRemove = id => {
    this.setState(state => ({
      animals: state.animals.filter(animal => animal.id !== id)
    }));
  };

  tick = () => {
    if (!this.props.isPlaying) return;

    this.setState(state => ({
      secondsPlayed: ++state.secondsPlayed,
      animals: [
        ...state.animals,
        { id: state.secondsPlayed, ...createRandomAnimal(this.props) }
      ]
    }));
  };

  render() {
    return (
      <Container isPlaying={this.props.isPlaying}>
        {this.state.animals.map(animal => (
          <Animal
            isPlaying={this.props.isPlaying}
            speed={this.props.speed}
            id={animal.id}
            key={animal.id}
            rescue={this.handleRescue}
            remove={this.handleRemove}
            {...animal}
          />
        ))}
      </Container>
    );
  }
}
