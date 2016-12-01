import React, { Component } from 'react';
import { Flex } from 'reflexbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { startGame, lightenBlock, lightenOffBlock } from '../actions/game';
import { colors } from '../constants';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  console.log('a');
  await sleep(1000);
  console.log('b');
})()

const Blocks = {
  GreenBlock: ({ ...props }) => <Block m={1} color={colors.green} className="top-left" {...props} />,
  RedBlock: ({ ...props }) => <Block m={1} color={colors.red} className="top-right" {...props} />,
  YellowBlock: ({ ...props }) => <Block m={1} color={colors.yellow} className="bottom-left" {...props} />,
  BlueBlock: ({ ...props }) => <Block m={1} color={colors.blue} className="bottom-right" {...props} />,
}

const renderBlock = (block, index) => {
  const Comp = Blocks[block.component];
  return <Comp {...block} key={index} />
}

class Board extends Component {

  componentDidMount() {
    const { match } = this.props;
    const { startGame, lightenBlock, lightenOffBlock } = this.props.actions;

    startGame();

    (async () => {
      for (let id of match) {
        lightenBlock({ id });
        await sleep(600);
        lightenOffBlock();
      }
    })();
  }

  render() {
    const { blocks } = this.props;

    return (
      <Shell>
        <Flex
          align="center"
          justify="center"
        >
          {blocks.ids.slice(0, 2).map((id, i) => renderBlock(blocks.byId[id], i))}
        </Flex>
        <Flex
          align="center"
          justify="center"
        >
          {blocks.ids.slice(2, 4).map((id, i) => renderBlock(blocks.byId[id], i))}
        </Flex>
      </Shell>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators({
      startGame,
      lightenBlock,
      lightenOffBlock,
    }, dispatch),
  }),
)(Board);
