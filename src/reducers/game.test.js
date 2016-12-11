import reducer, { initialState } from './game';
import {
  START_SONG,
  FINISH_SONG,
  GUESS_COLOR,
  NEXT_LEVEL,
  START_GAME,
  actionCreators,
} from '../actions/game';

describe('game reducer', () => {
  it('generates initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it(`handles action ${START_GAME}`, () => {
    expect(
      reducer(initialState, actionCreators.startGame())
    ).toEqual({
      ...initialState,
      gameOver: false,
      score: 0,
    });
  });

  it(`handles action ${START_SONG}`, () => {
    expect(
      reducer(initialState, actionCreators.startSong())
    ).toEqual({
      ...initialState,
      singing: true,
    });
  });

  it(`handles action ${FINISH_SONG}`, () => {
    expect(
      reducer(initialState, actionCreators.finishSong())
    ).toEqual({
      ...initialState,
      singing: false,
    });
  });

  it(`handles action ${NEXT_LEVEL}`, () => {
    expect(
      reducer(initialState, actionCreators.nextLevel())
    ).toEqual({
      ...initialState,
      score: 1,
    });
  });

  it(`handles action ${GUESS_COLOR}`, () => {
    expect(
      reducer(initialState, actionCreators.guessColor({ succeeded: true }))
    ).toEqual(initialState);

    expect(
      reducer({
        ...initialState,
        score: 1,
      }, actionCreators.guessColor({ succeeded: false }))
    ).toEqual({
      ...initialState,
      gameOver: true,
      score: 1,
      highscore: 1,
    });
  });

});
