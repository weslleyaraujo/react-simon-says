import { LIGHTEN_BLOCK, LIGHTEN_OFF_BLOCK, GUESS_COLOR } from '../actions/game';

const initialState = [
  {
    id: 'green',
    component: 'GreenBlock',
    active: false,
  },
  {
    id: 'red',
    component: 'RedBlock',
    active: false,
  },
  {
    id: 'yellow',
    component: 'YellowBlock',
    active: false,
  },
  {
    id: 'blue',
    component: 'BlueBlock',
    active: false,
  },
];

export default function blocks(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case LIGHTEN_BLOCK:
      return state.map(b => ({
        ...b,
        active: payload.id === b.id,
      }));

    case LIGHTEN_OFF_BLOCK:
      return state.map(b => ({
        ...b,
        active: false,
      }));

    default:
      return state;
  }
}
