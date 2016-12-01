import { createStore } from 'redux';
import rootReducer from './reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
export default createStore(rootReducer, {}, devtools && devtools());
