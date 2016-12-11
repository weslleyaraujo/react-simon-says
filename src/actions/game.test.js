import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const createStore = configureMockStore([thunk]);

import { actionCreators as actions } from './game';
import reducer from '../reducers';

const state = reducer({}, {});

describe('game actions', () => {

  it('dispatch proper actions on sing', done => {
    const id = 'red';
    const all = [id];
    const { match } = state;
    const store = createStore({
      ...state,
      match: {
        ...match,
        all,
      },
    });

    const expected = [
      actions.startSong(),
      actions.lightenPad({ id }),
      actions.lightenOffPad(),
      actions.finishSong(),
    ];

    store.dispatch(actions.sing())
      .then(x => {
        expect(store.getActions()).toEqual(expected);
        done();
      })
      .catch(e => console.log(`Error while testing sing: ${e}`))
  });

  it('dispatch proper actions on guess and responds as false', done => {
    const payload = {
      succeeded: false,
      id: 'blue',
    };

    const store = createStore({
      ...state,
    });

    const expected = [
      actions.guessColor(payload),
      actions.startSong(),
      actions.lightenPad({ id: payload.id }),
      actions.lightenOffPad(),
      actions.finishSong(),
    ];

    store.dispatch(actions.guess(payload))
      .then(response => {
        expect(store.getActions()).toEqual(expected);
        expect(response.done).toBe(false);
        done();
      })
      .catch(e => console.log(`Error while testing sing: ${e}`))
  });

  it('dispatch proper actions on guess and responds as true', done => {
    const id = 'blue';
    const payload = {
      succeeded: true,
      id,
    };

    const { match } = state;

    const store = createStore({
      ...state,
      match: {
        ...match,
        all: [
          id,
        ],
        guessed: [
          id,
        ],
      },
    });

    const expected = [
      actions.guessColor(payload),
      actions.startSong(),
      actions.lightenPad({ id: payload.id }),
      actions.lightenOffPad(),
      actions.finishSong(),
    ];

    store.dispatch(actions.guess(payload))
      .then(response => {
        expect(store.getActions()).toEqual(expected);
        expect(response.done).toBe(true);
        done();
      })
      .catch(e => console.log(`Error while testing guess: ${e}`))
  });
});
