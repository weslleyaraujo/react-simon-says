import { keyframes } from 'styled-components';

const createNeonAnimation = (color) => keyframes`
  from {
    border: 1px solid #FFF;
    box-shadow:
      0 0 10px  #FFF,
      0 0 20px  #FFF,
      0 0 30px  #FFF,
      0 0 40px  ${color},
      0 0 70px  ${color},
      0 0 80px  ${color},
      0 0 100px ${color},
      0 0 150px ${color};
  }
  to {
    boder: 1px solid #FFF;
    box-shadow:
      0 0 5px  #FFF,
      0 0 10px #FFF,
      0 0 15px #FFF,
      0 0 20px ${color},
      0 0 35px ${color},
      0 0 40px ${color},
      0 0 50px ${color},
      0 0 75px ${color};
  }
`;

export default createNeonAnimation;
