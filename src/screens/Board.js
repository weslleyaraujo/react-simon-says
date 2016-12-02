import React, { Component } from 'react';
import { Flex } from 'reflexbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { colors } from '../constants';
import { actionCreators } from '../actions/game';

// TODO: movo to a helper function
function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

const Blocks = {
  GreenBlock:   ({ ...props })  => <Block m={1} color={colors.green} className="top-left" {...props} />,
  RedBlock:     ({ ...props })  => <Block m={1} color={colors.red} className="top-right" {...props} />,
  YellowBlock:  ({ ...props })  => <Block m={1} color={colors.yellow} className="bottom-left" {...props} />,
  BlueBlock:    ({ ...props })  => <Block m={1} color={colors.blue} className="bottom-right" {...props} />,
}

class Board extends Component {

  componentDidMount() {
    const { actions} = this.props;
    actions.startGame();

    // TODO: read time from constants
    sleep(500).then(() => actions.makePresentation());
  }

  renderBlock({ block, index }) {
    const Comp = Blocks[block.component];
    return (
      <Comp
        {...block}
        key={index}
        onClick={() => this.onBlockClick({
          id: block.id,
        })}
      />
    );
  }

  onBlockClick({ id }) {
    const { match, actions } = this.props;
    const tail = match.guessed.length;
    const succeeded = match.all[tail] === id;

    actions.guessColor({
      id,
      succeeded,
    });
  }

  renderRow({ from, to }) {
    return (
      <Flex
        align="center"
        justify="center"
      >
        {this.props.blocks.slice(from, to).map((block, index) => this.renderBlock({ block, index }))}
      </Flex>
    )
  }

  render() {
    const { presentation, score } = this.props.game;

    return (
      <Shell style={{ pointerEvents: presentation ? 'none' : 'initial' }}>
        <h3>score: {score}</h3>
        {this.renderRow({ from: 0, to: 2 })}
        {this.renderRow({ from: 2, to: 4 })}
      </Shell>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  }),
)(Board);
