import styled from 'styled-components';
import { withReflex } from 'reflexbox';

const CenterOverlay = withReflex()(styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  text-align: center;
  background-color: rgba(0,0,0,0.9);
  height: 250px;
`);


export default CenterOverlay;
