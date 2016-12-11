import {
  START_SONG,
  FINISH_SONG,
  GUESS_COLOR,
  NEXT_LEVEL,
  START_GAME,
} from '../actions/game';

export const initialState = {
  singing: true,
  gameOver: false,
  score: 0,
  highscore: 0,
}

export default function game(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case START_GAME:
      return {
        ...state,
        gameOver: false,
        score: 0,
      }

    case START_SONG:
      return {
        ...state,
        singing: true,
      }

    case FINISH_SONG:
      return {
        ...state,
        singing: false,
      }

    case NEXT_LEVEL:
      return {
        ...state,
        score: state.score + 1,
      }

    case GUESS_COLOR:
      return {
        ...state,
        gameOver: !payload.succeeded,
        highscore: (!payload.succeeded && state.score) > state.highscore ? state.score : state.highscore,
      }

    default:
      return state;
  }
}
