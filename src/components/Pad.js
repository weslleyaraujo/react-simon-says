import styled from "styled-components";
import color from "color";
import createNeonAnimation from "../utils/create-neon-animation";
import { Box } from "reflexbox";

const transform = `
  transform: scale(1.02);
`;

const lighten = (from) => color(from).lighten(0.333).hex();

const activeCSS = (props) => `
  background-color: ${lighten(props.color)} !important;
  animation: foo;
  ${transform}
`;

const Pad = styled(Box)`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  cursor: pointer;
  animation: none;
  transition: 0.2s;
  -webkit-tap-highlight-color: transparent;
  ${(props) => (props.active ? activeCSS(props) : "")}

  @media (max-width: 600px) {
    width: 170px;
    height: 170px;
  }

  &:active {
    background-color: ${({ color }) => lighten(color)} ${activeCSS};
  }

  &:hover {
    ${transform}
    box-shadow: 0 0 15px rgba(0, 0, 0, .8);
  }

  &.top-left {
    border-radius: 320px 20px 20px 20px;
  }

  &.top-right {
    border-radius: 20px 320px 20px 20px;
  }

  &.bottom-left {
    border-radius: 20px 20px 20px 320px;
  }

  &.bottom-right {
    border-radius: 20px 20px 320px 20px;
  }
`;

export default Pad;
