import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box, withReflex } from 'reflexbox';
import { Link } from 'react-router';
import GoOctoface from 'react-icons/lib/go/octoface';

import Title from '../components/Title';
import Shell from '../components/Shell';
import { ButtonLink } from '../components/Buttons';
import { colors } from '../constants';

const AbsoluteOnTop = withReflex()(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`);

class App extends Component {
  render() {
    return (
      <Shell>
        <AbsoluteOnTop p={2} justify="flex-end" flex>
          <a href="" target="_blank">
            <GoOctoface size={40} color={'white'}/>
          </a>
        </AbsoluteOnTop>
        <Title value="REACT SIMON" />
        <Flex justify="center">
          <ButtonLink to="/board">Play</ButtonLink>
        </Flex>
      </Shell>
    )
  }
}

export default App;
