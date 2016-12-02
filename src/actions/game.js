import createAction from '../utils/create-action';
import { PRESENTATION_DELAY_TIME } from '../constants';
import sleep from '../utils/sleep';

export const START_GAME = 'START_GAME';
export const START_PRESENTATION = 'START_PRESENTATION';
export const FINISH_PRESENTATION = 'FINISH_PRESENTATION';
export const LIGHTEN_BLOCK = 'LIGHTEN_BLOCK';
export const LIGHTEN_OFF_BLOCK = 'LIGHTEN_OFF_BLOCK';
export const GUESS_COLOR = 'GUESS_COLOR';
export const NEXT_LEVEL = 'NEXT_LEVEL';

const guessColorSync = createAction(GUESS_COLOR);
const nextLevel = createAction(NEXT_LEVEL);
const startPresentation = createAction(START_PRESENTATION);
const finishPresentation = createAction(FINISH_PRESENTATION);
const lightenBlock = createAction(LIGHTEN_BLOCK);
const lightenOffBlock = createAction(LIGHTEN_OFF_BLOCK);

const makePresentation = payload => async (dispatch, getState) => {
  dispatch(startPresentation());
  const { match } = getState();

  for (let id of match.all) {
    dispatch(lightenBlock({ id }));
    await sleep(PRESENTATION_DELAY_TIME);
    dispatch(lightenOffBlock());
    await sleep(PRESENTATION_DELAY_TIME);
  }

  dispatch(finishPresentation());
}


const guessColor = payload => async (dispatch, getState) => {
  dispatch(guessColorSync(payload));
  const { match } = getState();
  const { all, guessed } = match;

  if (payload.succeeded && (all.length === guessed.length)) {
    dispatch(nextLevel());
    await sleep(PRESENTATION_DELAY_TIME);
    dispatch(makePresentation());
  }
}

export const actionCreators = {
  startGame: createAction(START_GAME),
  startPresentation,
  finishPresentation,
  lightenBlock,
  lightenOffBlock,
  nextLevel,
  guessColor,
  makePresentation,
}
