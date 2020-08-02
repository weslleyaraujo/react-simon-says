import sleep from "../utils/sleep";
import getRandomId from "../utils/get-random-id";
import createAction from "../utils/create-action";
import { SONG_DELAY_TIME, REDUCED_DELAY_TIME } from "../constants";

export const START_GAME = "START_GAME";
export const START_SONG = "START_SONG";
export const FINISH_SONG = "FINISH_SONG";
export const LIGHTEN_PAD = "LIGHTEN_PAD";
export const LIGHTEN_OFF_PAD = "LIGHTEN_OFF_PAD";
export const GUESS_COLOR = "GUESS_COLOR";
export const NEXT_LEVEL = "NEXT_LEVEL";

const start = createAction(START_GAME);
const next = createAction(NEXT_LEVEL);

const startGame = (payload) => start({ next: getRandomId() });
const nextLevel = (payload) => next({ next: getRandomId() });

const guessColor = createAction(GUESS_COLOR);
const startSong = createAction(START_SONG);
const finishSong = createAction(FINISH_SONG);
const lightenPad = createAction(LIGHTEN_PAD);
const lightenOffPad = createAction(LIGHTEN_OFF_PAD);

const sing = (payload) => async (dispatch, getState) => {
  try {
    dispatch(startSong());
    const { match } = getState();
    for (let i = 0; i <= match.all.length - 1; i++) {
      const id = match.all[i];
      dispatch(lightenPad({ id }));
      await sleep(SONG_DELAY_TIME);
      dispatch(lightenOffPad());
      await sleep(SONG_DELAY_TIME);
    }

    dispatch(finishSong());
  } catch (e) {
    console.error(e);
  }
};

const guess = ({ succeeded, id }) => async (dispatch, getState) => {
  try {
    dispatch(guessColor({ succeeded, id }));
    dispatch(startSong());
    dispatch(lightenPad({ id }));
    await sleep(REDUCED_DELAY_TIME);
    dispatch(lightenOffPad());
    await sleep(REDUCED_DELAY_TIME);
    dispatch(finishSong());

    const { match } = getState();
    const { all, guessed } = match;
    const done = all.length === guessed.length && succeeded;

    return new Promise((r) => r({ done }));
  } catch (e) {
    console.error(e);
  }
};

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
};
