import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { colors } from '../constants';

const RedBlock = ({ ...props }) => <Block m={1} color={colors.red} className="top-left" {...props} />
const GreenBlock = ({ ...props }) => <Block m={1} color={colors.green} className="top-right" {...props} />
const BlueBlock = ({ ...props }) => <Block m={1} color={colors.blue} className="bottom-left" {...props} />
const YellowBlock = ({ ...props }) => <Block m={1} color={colors.yellow} className="bottom-right" {...props} />

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
          <YellowBlock active={true} />
        </Flex>
      </Shell>
    );
  }
}

export default Board;
