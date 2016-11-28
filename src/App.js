import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router';

import Block from './components/Block';

const Row = ({ children }) => (
  <Flex
    align="center"
    justify="center"
  >
    {children}
  </Flex>
);

const RedBlock = () => <Block m={1} color="#FF4136" />
const BlueBlock = () => <Block m={1} color="#0074D9" />
const GreenBlock = () => <Block m={1} color="#2ECC40" />
const YellowBlock = () => <Block m={1} color="#FFDC00" />

const Shell = ({ children }) => (
  <Flex align="center" justify="center" style={{ width: '100%', height: '100%' }}>
    <Box>{children}</Box>
  </Flex>
);

const Board = () => (
  <div>
    <Flex
      align="center"
      justify="center"
    >
      <RedBlock />
      <GreenBlock />
    </Flex>
    <Flex
      align="center"
      justify="center"
    >
      <BlueBlock />
      <YellowBlock />
    </Flex>
  </div>
);

const Title = styled.h1`
  color: #FFF;
  font-size: 5em;
`;

const ButtonLink = styled(Link)`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  font-family: 'Bungee', sans-serif;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const Welcome = () => (
  <div>
    <Title>REACT SIMON</Title>
    <Flex justify="center">
      <ButtonLink>Play</ButtonLink>
    </Flex>
  </div>
);

class App extends Component {
  render() {
    return (
      <Shell>
        <Welcome />
      </Shell>
    )
  }
}

export default App;
