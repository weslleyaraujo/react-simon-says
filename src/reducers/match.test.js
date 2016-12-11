import reducer, { initialState } from './match';
import {
  START_SONG,
  FINISH_SONG,
  GUESS_COLOR,
  NEXT_LEVEL,
  START_GAME,
  actionCreators,
} from '../actions/game';

describe('match reducer', () => {
  it('generates initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it(`handles action ${START_GAME}`, () => {
    const state = reducer(initialState, actionCreators.startGame());
    expect(
      state.all.length
    ).toBe(1);

    expect(
      state.guessed.length
    ).toBe(0);

  });

  it(`handles action ${NEXT_LEVEL}`, () => {
    const state = reducer(initialState, actionCreators.nextLevel());
    expect(
      state.all.length
    ).toBe(1);

    expect(
      state.guessed.length
    ).toBe(0);

  });


  it(`handles action ${GUESS_COLOR}`, () => {
    const id = 'red';
    const state = reducer(initialState, actionCreators.guessColor({ succeeded: true, id }));
    expect(
      state
    ).toEqual({
      ...initialState,
      guessed: [id],
    });

    expect(
      reducer(initialState, actionCreators.guessColor({ succeeded: false }))
    ).toEqual({
      ...initialState,
    });
  });

});
