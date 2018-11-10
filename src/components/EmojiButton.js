import styled from 'react-emotion/macro';

import { SPACING } from '../constants';

let buttonPadding = 4;
let emojiSize = 8;

export default styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${SPACING * (emojiSize + buttonPadding)}px;
  height: ${SPACING * (emojiSize + buttonPadding)}px;
  font-size: ${SPACING * emojiSize}px;
  line-height: 1;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  :hover {
    transform: scale(1.2);
  }

  :touch {
    transform: scale(0.8);
  }
`;
