import React, { useCallback, useEffect } from "react";
import { connect, shallowEqual, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Flex } from "reflexbox/styled-components";
import { actionCreators } from "../actions/game";
import { Button } from "../components/Buttons";
import CenterOverlay from "../components/CenterOverlay";
import Game from "../components/Game";
import GrayScale from "../components/GrayScale";
import Pads from "../components/Pads";
import Score from "../components/Score";
import { NEXT_LEVEL_DELAY_TIME, SONG_DELAY_TIME } from "../constants";
import sleep from "../utils/sleep";
import Player from "./Player";
import Shell from "./Shell";

export function Board(props) {
  const { actions } = props;
  const {
    game: { gameOver, score, singing, highscore },
    match,
    pads,
  } = useSelector((state) => state, shallowEqual);

  const startMatch = useCallback(() => {
    actions.startGame();
    sleep(SONG_DELAY_TIME).then(() => actions.sing());
  }, [actions]);

  useEffect(() => {
    startMatch();
  }, []);

  const onPadClick = useCallback(
    ({ id }) => {
      const tail = match.guessed.length;
      const succeeded = match.all[tail] === id;
      if (!gameOver) {
        window.navigator.vibrate && window.navigator.vibrate(10);
        actions.guess({ id, succeeded }).then(async ({ done }) => {
          if (done) {
            actions.nextLevel();
            await sleep(NEXT_LEVEL_DELAY_TIME);
            actions.sing();
          }
        });
      }
    },
    [actions, match]
  );

  return (
    <Shell>
      {gameOver && (
        <CenterOverlay p={2}>
          <h2>SCORE {score}</h2>
          <h3>HIGH SCORE {highscore}</h3>
          <Button onClick={startMatch}>Try again</Button>
        </CenterOverlay>
      )}
      <GrayScale disabled={!gameOver}>
        <Game disbledPointer={singing || gameOver}>
          <Flex align="center" justify="center">
            {pads.slice(0, 2).map((pad, i) => (
              <Pads
                key={i}
                pad={pad}
                onClick={() => onPadClick({ id: pad.id })}
              />
            ))}
          </Flex>
          <Score length={score?.toString().length}>{score}</Score>
          <Flex align="center" justify="center">
            {pads.slice(2, 4).map((pad, i) => (
              <Pads
                key={i}
                pad={pad}
                onClick={() => onPadClick({ id: pad.id })}
              />
            ))}
          </Flex>
        </Game>
      </GrayScale>
      <Player />
    </Shell>
  );
}

export default connect(null, (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
}))(Board);
