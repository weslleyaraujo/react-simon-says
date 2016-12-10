import styled from 'styled-components';
import { withReflex } from 'reflexbox';

const Header = withReflex()(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`);

export default Header;
