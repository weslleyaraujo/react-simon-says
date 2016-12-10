import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Title from '../components/Title';
import Shell from './Shell';
import { ButtonLink } from '../components/Buttons';

class Welcome extends Component {
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

export default Welcome;
