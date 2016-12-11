import { LIGHTEN_PAD, LIGHTEN_OFF_PAD } from '../actions/game';

export const initialState = [
  {
    id: 'green',
    component: 'GreenPad',
    active: false,
  },
  {
    id: 'red',
    component: 'RedPad',
    active: false,
  },
  {
    id: 'yellow',
    component: 'YellowPad',
    active: false,
  },
  {
    id: 'blue',
    component: 'BluePad',
    active: false,
  },
];

export default function pads(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case LIGHTEN_PAD:
      return state.map(b => ({
        ...b,
        active: payload.id === b.id,
      }));

    case LIGHTEN_OFF_PAD:
      return state.map(b => ({
        ...b,
        active: false,
      }));

    default:
      return state;
  }
}
