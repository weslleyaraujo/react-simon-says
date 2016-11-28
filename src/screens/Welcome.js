import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router';

import Title from '../components/Title';
import Shell from '../components/Shell';
import { ButtonLink } from '../components/Buttons';
import { colors } from '../constants';

class App extends Component {
  render() {
    return (
      <Shell>
        <Title value="REACT SIMON" />
        <Flex justify="center">
          <ButtonLink to="/board">Play</ButtonLink>
        </Flex>
      </Shell>
    )
  }
}

export default App;
