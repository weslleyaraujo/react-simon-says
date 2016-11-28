import { createStore, combineReducers } from 'redux';

const status = (state = {
  onGoing: false,
  presentationOnGoing: false,
  currentScore: 0,
  highScore: 0,
}, action) => {
  const { type, payload } = action;
  switch(type) {
    default:
      return state;
  }
}

const match = (state = [], action) => {
  const { type, payload } = action;
  switch(type) {
    default:
      return state;
  }
}

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStore(combineReducers({
  status,
  match,
}), {}, extension);
