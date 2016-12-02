import { ids } from '../constants';
import { START_GAME, GUESS_COLOR, NEXT_LEVEL } from '../actions/game';

const random =  () => ids[Math.floor(Math.random() * ids.length)];

const initialState = {
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
          random(),
        ],
      }

    case NEXT_LEVEL:
      return {
        guessed: [],
        all: state.all.concat(random()),
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
