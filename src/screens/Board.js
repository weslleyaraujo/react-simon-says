import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { colors } from '../constants';

const RedBlock = () => <Block m={1} color={colors.red} />
const BlueBlock = () => <Block m={1} color={colors.blue} />
const GreenBlock = () => <Block m={1} color={colors.green} />
const YellowBlock = () => <Block m={1} color={colors.yellow} className="active" />

class Board extends Component {
  render() {
    return (
      <Shell>
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
      </Shell>
    );
  }
}

export default Board;
