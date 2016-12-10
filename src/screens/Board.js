import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bind as bindKey } from 'mousetrap';

import Block from '../components/Block';
import Shell from './Shell';
import CenterOverlay from '../components/CenterOverlay';
import GrayScale from '../components/GrayScale';
import { Button } from '../components/Buttons';
import { colors } from '../constants';
import { actionCreators } from '../actions/game';
import { SONG_DELAY_TIME } from '../constants';
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

const Game = styled.div`
  pointer-events: ${props => props.disbledPointer ? 'none' : 'initial'};
  position: relative;
`;

const Score = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${colors.dark};
  font-size: ${props => props.length <= 2 ? '62px' : '45px'};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  z-index: 2;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .8);
  text-align: center;
`;

class Board extends Component {

  componentDidMount() {
    this.startMatch();
    const { actions } = this.props;

    bindKey(['1', 'd'], () =>
      actions.guess(this.getGuessPayload({ id: 'green' })));

    bindKey(['2', 'f'], () =>
      actions.guess(this.getGuessPayload({ id: 'red' })));

    bindKey(['3', 'j'], () =>
      actions.guess(this.getGuessPayload({ id: 'yellow' })));

    bindKey(['4', 'l'], () =>
      actions.guess(this.getGuessPayload({ id: 'blue' })));

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
    sleep(SONG_DELAY_TIME).then(() => actions.sing());
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
    actions.guess(this.getGuessPayload({ id }));
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
    const { singing, score, gameOver, highscore } = this.props.game;
    return (
      <Shell>
        {gameOver &&
          <CenterOverlay size={300} p={2}>
            <h3>you suck!</h3>
            <h2>SCORE <span style={{ color: colors.red, }}>{score}</span></h2>
            <h3>HIGH SCORE <span style={{ color: colors.blue, }}>{highscore}</span></h3>
            <Button onClick={this.startMatch.bind(this)}>Try again</Button>
          </CenterOverlay>
        }
        <GrayScale disabled={!gameOver}>
          <Game disbledPointer={(singing || gameOver)}>
            {this.renderRow({ from: 0, to: 2 })}
            <Score length={score.toString().length}>{score}</Score>
            {this.renderRow({ from: 2, to: 4 })}
          </Game>
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
