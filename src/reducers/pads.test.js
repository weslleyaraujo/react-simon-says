import reducer, { initialState } from './pads';
import {
  LIGHTEN_PAD,
  LIGHTEN_OFF_PAD,
  actionCreators,
} from '../actions/game';

describe('pads reducer', () => {
  it('generates initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it(`handles action ${LIGHTEN_PAD}`, () => {
    const selected = initialState[0];
    expect(
      reducer(initialState, actionCreators.lightenPad({ id: selected.id }))
    ).toEqual([
      {
        ...selected,
        active: true,
      },
      ...initialState.slice(1, initialState.length)
    ]);
  });

  it(`handles action ${LIGHTEN_OFF_PAD}`, () => {
    const selected = initialState[0];
    expect(
      reducer([
      {
        ...selected,
        active: true,
      },
      ...initialState.slice(1, initialState.length)
    ], actionCreators.lightenOffPad())
    ).toEqual(initialState);
  });

});
