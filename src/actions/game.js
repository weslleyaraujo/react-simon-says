import createAction from '../utils/create-action';
import {
  SONG_DELAY_TIME,
  REDUCED_DELAY_TIME,
  NEXT_LEVEL_DELAY_TIME,
} from '../constants';
import sleep from '../utils/sleep';

export const START_GAME = 'START_GAME';
export const START_SONG = 'START_SONG';
export const FINISH_SONG = 'FINISH_SONG';
export const LIGHTEN_PAD = 'LIGHTEN_PAD';
export const LIGHTEN_OFF_PAD = 'LIGHTEN_OFF_PAD';
export const GUESS_COLOR = 'GUESS_COLOR';
export const NEXT_LEVEL = 'NEXT_LEVEL';

const startGame = createAction(START_GAME);
const guessColor = createAction(GUESS_COLOR);
const nextLevel = createAction(NEXT_LEVEL);
const startSong = createAction(START_SONG);
const finishSong = createAction(FINISH_SONG);
const lightenPad = createAction(LIGHTEN_PAD);
const lightenOffPad = createAction(LIGHTEN_OFF_PAD);

const sing = (payload) => async (dispatch, getState) => {
  dispatch(startSong());
  const { match } = getState();
  for (let id of match.all) {
    dispatch(lightenPad({ id }));
    await sleep(SONG_DELAY_TIME);
    dispatch(lightenOffPad());
    await sleep(SONG_DELAY_TIME);
  }

  dispatch(finishSong());
}


const guess = ({ succeeded, id }) => async (dispatch, getState) => {
  dispatch(guessColor({ succeeded, id }));
  dispatch(startSong());
  dispatch(lightenPad({ id }));
  await sleep(REDUCED_DELAY_TIME);
  dispatch(lightenOffPad(REDUCED_DELAY_TIME));
  await sleep(REDUCED_DELAY_TIME);
  dispatch(finishSong());

  const { match } = getState();
  const { all, guessed } = match;
  const done = (all.length === guessed.length);

  if (succeeded && done) {
    dispatch(nextLevel());
    await sleep(NEXT_LEVEL_DELAY_TIME);
    dispatch(sing());
  }
}

export const actionCreators = {
  startSong,
  startGame,
  finishSong,
  lightenPad,
  lightenOffPad,
  nextLevel,
  guessColor,
  guess,
  sing,
}
