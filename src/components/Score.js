import styled from 'styled-components';
import { colors } from '../constants';

const Score = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${colors.dark};
  font-size: ${props => props.length <= 2 ? '62px' : '45px'};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  z-index: 2;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .8);
  text-align: center;
`;

export default Score;
