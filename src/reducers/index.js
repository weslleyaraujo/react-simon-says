import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import pads from './pads';
import game from './game';
import match from './match';

export default combineReducers({
  pads,
  game,
  match,
  routing,
});

