import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import blocks from './blocks';
import game from './game';
import match from './match';

export default combineReducers({
  blocks,
  game,
  match,
  routing,
});

