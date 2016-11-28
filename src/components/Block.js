import React from 'react';
import styled, { keyframes } from 'styled-components';
import { withReflex } from 'reflexbox';
import createNeonAnimation from '../utils/create-neon-animation';

const Block = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #3A3A3A;
  box-sizing: border-box;
  background-color: ${({ color }) => color}
  cursor: pointer;
  transition: 0.3s;
  animation: none;

  &.active {
    animation: ${({ color }) => createNeonAnimation(color)} 0.3s linear;
  }
`;

export default withReflex()(Block);
