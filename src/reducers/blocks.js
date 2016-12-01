import { LIGHTEN_BLOCK, LIGHTEN_OFF_BLOCK } from '../actions/game';

const initialState = {
  ids: ['green', 'red', 'yellow', 'blue'],
  byId: {
    green: {
      component: 'GreenBlock',
      active: false,
    },
    red: {
      component: 'RedBlock',
      active: false,
    },
    yellow: {
      component: 'YellowBlock',
      active: false,
    },
    blue: {
      component: 'BlueBlock',
      active: false,
    },
  },
}

export default function blocks(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case LIGHTEN_BLOCK:
      return {
        ...state,
        byId: state.ids.reduce((acc, id) => {
          return {
            ...acc,
            [id]: {
              ...state.byId[id],
              active: payload.id === id,
            },
          }
        }, {}),
      }

    case LIGHTEN_OFF_BLOCK:
      return {
        ...state,
        byId: state.ids.reduce((acc, id) => {
          return {
            ...acc,
            [id]: {
              ...state.byId[id],
              active: false,
            },
          }
        }, {}),
      }

    default:
      return state;
  }
}
