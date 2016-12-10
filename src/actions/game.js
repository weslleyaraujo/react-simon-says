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
export const LIGHTEN_BLOCK = 'LIGHTEN_BLOCK';
export const LIGHTEN_OFF_BLOCK = 'LIGHTEN_OFF_BLOCK';
export const GUESS_COLOR = 'GUESS_COLOR';
export const NEXT_LEVEL = 'NEXT_LEVEL';

const guessColorSync = createAction(GUESS_COLOR);
const nextLevel = createAction(NEXT_LEVEL);
const startSong = createAction(START_SONG);
const finishSong = createAction(FINISH_SONG);
const lightenBlock = createAction(LIGHTEN_BLOCK);
const lightenOffBlock = createAction(LIGHTEN_OFF_BLOCK);

const makeSong = payload => async (dispatch, getState) => {
  dispatch(startSong());
  const { match } = getState();

  for (let id of match.all) {
    dispatch(lightenBlock({ id }));
    await sleep(SONG_DELAY_TIME);
    dispatch(lightenOffBlock());
    await sleep(SONG_DELAY_TIME);
  }

  dispatch(finishSong());
}


const guessColor = payload => async (dispatch, getState) => {
  const { game } = getState();
  if (game.gameOver) {
    return;
  }

  dispatch(guessColorSync(payload));
  dispatch(startSong());
  dispatch(lightenBlock({ id: payload.id }));
  await sleep(REDUCED_DELAY_TIME);
  dispatch(lightenOffBlock(REDUCED_DELAY_TIME));
  await sleep(REDUCED_DELAY_TIME);
  dispatch(finishSong());

  const { match } = getState();
  const { all, guessed } = match;
  const allGuessed = (all.length === guessed.length);

  if (payload.succeeded && allGuessed) {
    dispatch(nextLevel());
    await sleep(NEXT_LEVEL_DELAY_TIME);
    dispatch(makeSong());
  }
}

export const actionCreators = {
  startGame: createAction(START_GAME),
  startSong,
  finishSong,
  lightenBlock,
  lightenOffBlock,
  nextLevel,
  guessColor,
  makeSong,
}
