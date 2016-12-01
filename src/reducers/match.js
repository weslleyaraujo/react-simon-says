import { names } from '../constants';
import { START_GAME } from '../actions/game';

export default function blocks(state = [], action) {
  const { type } = action;
  switch(type) {
    case START_GAME:
      return [
        names[Math.floor(Math.random() * names.length)],
      ]

    default:
      return state;
  }
}
