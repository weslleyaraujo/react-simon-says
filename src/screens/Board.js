import React, { Component } from 'react';
import { Flex } from 'reflexbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind as bindKey } from 'mousetrap';

import Block from '../components/Block';
import Shell from '../components/Shell';
import CenterOverlay from '../components/CenterOverlay';
import GrayScale from '../components/GrayScale';
import AbsoluteOnTop from '../components/AbsoluteOnTop';
import { Button } from '../components/Buttons';
import { colors } from '../constants';
import { actionCreators } from '../actions/game';
import { PRESENTATION_DELAY_TIME } from '../constants';
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
    const { actions } = this.props;

    bindKey(['1', 'd'], () =>
      actions.guessColor(this.getGuessPayload({ id: 'green' })));

    bindKey(['2', 'f'], () =>
      actions.guessColor(this.getGuessPayload({ id: 'red' })));

    bindKey(['3', 'j'], () =>
      actions.guessColor(this.getGuessPayload({ id: 'yellow' })));

    bindKey(['4', 'l'], () =>
      actions.guessColor(this.getGuessPayload({ id: 'blue' })));

    bindKey(['space'], this.onSpacePress.bind(this));
  }

  onSpacePress() {
    const { gameOver } = this.props.game;
    if(gameOver) {
      this.startMatch();
    }
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

  getGuessPayload({ id }) {
    const { match } = this.props;
    const tail = match.guessed.length;
    const succeeded = match.all[tail] === id;
    return {
      id,
      succeeded,
    }
  }

  onBlockClick({ id }) {
    const { actions } = this.props;
    actions.guessColor(this.getGuessPayload({ id }));
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
        {!gameOver && 
          <AbsoluteOnTop p={2} flex>
            <div style={{ color: 'white' }}>
              SCORE: {score} <br />
              HIGH SCORE: {highscore} <br />
            </div>
          </AbsoluteOnTop>
        }
        {gameOver &&
          <CenterOverlay size={300} p={2}>
            <h3>you suck</h3>
            <p>SCORE: {score}</p>
            <p>HIGH SCORE: {highscore}</p>
            <Button onClick={this.startMatch.bind(this)}>Try again</Button>
          </CenterOverlay>
        }
        <GrayScale disabled={!gameOver}>
          <span style={{ pointerEvents: (presentation || gameOver) ? 'none' : 'initial' }}>
            {this.renderRow({ from: 0, to: 2 })}
            {this.renderRow({ from: 2, to: 4 })}
          </span>
        </GrayScale>
        <Player />
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
