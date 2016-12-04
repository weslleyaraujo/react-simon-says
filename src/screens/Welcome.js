import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, withReflex } from 'reflexbox';
import GoOctoface from 'react-icons/lib/go/octoface';

import Title from '../components/Title';
import Shell from '../components/Shell';
import AbsoluteOnTop from '../components/AbsoluteOnTop';
import { ButtonLink } from '../components/Buttons';

// TODO: add link to github repo
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
