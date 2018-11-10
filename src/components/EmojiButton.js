import styled from 'react-emotion/macro';

import { SPACING, FONT_SIZE, BUTTON_PADDING } from '../constants';

let size = (BUTTON_PADDING * 2 + FONT_SIZE) * SPACING;

export default styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size}px;
  height: ${size}px;
  font-size: ${FONT_SIZE * SPACING}px;
  line-height: 1;
  cursor: pointer;
  transition: 0.05s transform ease-in-out;

  :active {
    transform: scale(0.8);
  }
`;
