import createAction from '../utils/create-action';

export const START_GAME = 'START_GAME';
export const START_PRESENTATION = 'START_PRESENTATION';
export const FINISH_PRESENTATION = 'FINISH_PRESENTATION';
export const LIGHTEN_BLOCK = 'LIGHTEN_BLOCK';
export const LIGHTEN_OFF_BLOCK = 'LIGHTEN_OFF_BLOCK';
export const GUESS_COLOR = 'GUESS_COLOR';

export const actionCreators = {
  startGame: createAction(START_GAME),
  startPresentation: createAction(START_PRESENTATION),
  finishPresentation: createAction(FINISH_PRESENTATION),
  lightenBlock: createAction(LIGHTEN_BLOCK),
  lightenOffBlock: createAction(LIGHTEN_OFF_BLOCK),
  guessColor: createAction(GUESS_COLOR),
}
