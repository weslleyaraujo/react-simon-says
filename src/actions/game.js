import createAction from '../utils/create-action';

export const START_PRESENTATION = 'START_PRESENTATION';
export const FINISH_PRESENTATION = 'FINISH_PRESENTATION';
export const LIGHTEN_BLOCK = 'LIGHTEN_BLOCK';
export const LIGHTEN_OFF_BLOCK = 'LIGHTEN_OFF_BLOCK';

export const startPresentation = createAction(START_PRESENTATION);
export const finishPresentation = createAction(FINISH_PRESENTATION);
export const lightenBlock = createAction(LIGHTEN_BLOCK);
export const lightenOffBlock = createAction(LIGHTEN_OFF_BLOCK);

