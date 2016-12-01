import { START_GAME } from '../actions/game';

const initialState = {
  presentation: false,
  score: 0,
  highscore: 0,
}

export default function game(state = initialState, action) {
  const { type } = action;
  switch(type) {
    default:
      return state;
  }
}
