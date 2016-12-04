import React, { Component } from 'react';
import { Flex } from 'reflexbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Block from '../components/Block';
import Shell from '../components/Shell';
import { Button, ButtonLink } from '../components/Buttons';
import { colors } from '../constants';
import { actionCreators } from '../actions/game';
import { PRESENTATION_DELAY_TIME } from '../constants';
import AbsoluteOnTop from '../components/AbsoluteOnTop';
import Player from './Player';
import sleep from '../utils/sleep';

const Blocks = {
  GreenBlock: ({ ...props }) => (
    <Block m={1} color={colors.green} className="top-left" {...props} />
  ),
  RedBlock: ({ ...props }) => (
    <Block m={1} color={colors.red} className="top-right" {...props} />
  ),
  YellowBlock: ({ ...props }) => (
    <Block m={1} color={colors.yellow} className="bottom-left" {...props} />
  ),
  BlueBlock: ({ ...props }) => (
    <Block m={1} color={colors.blue} className="bottom-right" {...props} />
  ),
}

class Board extends Component {

  componentDidMount() {
    this.startMatch();
  }

  startMatch() {
    const { actions} = this.props;
    actions.startGame();
    sleep(PRESENTATION_DELAY_TIME).then(() => actions.makePresentation());
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
        {this.props.blocks.slice(from, to).map((block, index) =>
          this.renderBlock({ block, index }))
        }
      </Flex>
    )
  }

  render() {
    const { presentation, score, gameOver, highscore } = this.props.game;

    return (
      <Shell>
        <AbsoluteOnTop p={2} flex>
          <div style={{ color: 'white' }}>
            score: {score} <br />
            high score: {highscore} <br />
            {gameOver && (
              <div>
                <p>game over</p>
                <Button onClick={this.startMatch.bind(this)}>Try again</Button>
              </div>
            )}
          </div>
        </AbsoluteOnTop>
        <Player />
        <span style={{ pointerEvents: (presentation || gameOver) ? 'none' : 'initial' }}>
          {this.renderRow({ from: 0, to: 2 })}
          {this.renderRow({ from: 2, to: 4 })}
        </span>
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
