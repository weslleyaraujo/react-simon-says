import styled from 'styled-components';

const Game = styled.div`
  pointer-events: ${props => props.disbledPointer ? 'none' : 'initial'};
  position: relative;
`;

export default Game;

