import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

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

class App extends Component {
  render() {
    return (
      <Flex align="center" justify="center" style={{ width: '100%', height: '100%' }}>
        <Box>
          <Row>
            <RedBlock />
            <GreenBlock />
          </Row>
          <Row>
            <BlueBlock />
            <YellowBlock />
          </Row>
        </Box>
      </Flex>
    )
  }
}

export default App;
