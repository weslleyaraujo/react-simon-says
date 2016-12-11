import { START_GAME, GUESS_COLOR, NEXT_LEVEL } from '../actions/game';

export const initialState = {
  guessed: [],
  all: [],
}

export default function blocks(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case START_GAME:
      return {
        guessed: [],
        all: [
          payload.next,
        ],
      }

    case NEXT_LEVEL:
      return {
        guessed: [],
        all: state.all.concat(payload.next),
      }

    case GUESS_COLOR:
      return {
       ...state,
        guessed: payload.succeeded ? state.guessed.concat(payload.id) : state.guessed,
      }

    default:
      return state;
  }
}
