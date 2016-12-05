import styled from 'styled-components';

const GrayScale = styled.div`
  transition: 0.7s;
  filter: grayscale(100%);
  ${props => !props.disabled ? '' : `
    filter: none;
  `}
`;

export default GrayScale;

