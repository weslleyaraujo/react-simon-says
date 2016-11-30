import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { colors } from '../constants';

const GreenBlock = ({ ...props }) => <Block m={1} color={colors.green} className="top-left" {...props} />
const RedBlock = ({ ...props }) => <Block m={1} color={colors.red} className="top-right" {...props} />
const YellowBlock = ({ ...props }) => <Block m={1} color={colors.yellow} className="bottom-left" {...props} />
const BlueBlock = ({ ...props }) => <Block m={1} color={colors.blue} className="bottom-right" {...props} />

class Board extends Component {
  render() {
    return (
      <Shell>
        <Flex
          align="center"
          justify="center"
        >
          <GreenBlock />
          <RedBlock />
        </Flex>
        <Flex
          align="center"
          justify="center"
        >
          <YellowBlock active={true} />
          <BlueBlock />
        </Flex>
      </Shell>
    );
  }
}

export default Board;
