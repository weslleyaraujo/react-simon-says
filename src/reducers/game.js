import { START_PRESENTATION, FINISH_PRESENTATION } from '../actions/game';

const initialState = {
  presentation: false,
  score: 0,
  highscore: 0,
}

export default function game(state = initialState, action) {
  const { type } = action;
  switch(type) {
    case START_PRESENTATION:
      return {
        ...state,
        presentation: true,
      }

    case FINISH_PRESENTATION:
      return {
        ...state,
        presentation: false,
      }

    default:
      return state;
  }
}
