import React from 'react';
import styled, { keyframes } from 'styled-components';
import { withReflex } from 'reflexbox';
import createNeonAnimation from '../utils/create-neon-animation';

const Block = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: ${({ color }) => color}
  cursor: pointer;
  animation: none;
  border-radius: 5px;
  &.active {
    border: 1px solid white;
    animation: ${({ color }) => createNeonAnimation(color)} 0.3s linear;
  }
`;

export default withReflex()(Block);
