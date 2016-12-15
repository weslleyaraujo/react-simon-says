import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { actionCreators as actions } from '../actions/game'
import reducer from '../reducers';
import { Board } from './Board';
import { SONG_DELAY_TIME, NEXT_LEVEL_DELAY_TIME } from '../constants';
import sleep from '../utils/sleep';

window.matchMedia = _ => ({
  matches: [],
  addListener: () => {},
  removeListener: () => {}
});

const state = reducer({}, {});
const createStore = configureMockStore([thunk]);

var mockSleep;
jest.mock('../utils/sleep.js', () => {
  mockSleep = jest.fn();
  return () => ({
    then: mockSleep,
  })
});

beforeEach(() => {
  mockSleep.mockClear();
});


it('renders Board correctly', () => {
  const wrapper = shallow(
    <Board {...state} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});


it('calls startGame after sleep', done => {
  const store = createStore(state);
  actions.startGame = jest.fn();
  actions.sing = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <Board {...state} actions={actions} />
    </Provider>
  );

  expect(mockSleep).toHaveBeenCalled();
  expect(actions.startGame).toHaveBeenCalled();
  setTimeout(() => {
    done()
    expect(actions.sing).toHaveBeenCalled()
  }, SONG_DELAY_TIME);
});

it('calls guess after click on Pad', done => {
  const store = createStore(state);
  actions.guess = jest.fn(() => ({ then: done }));

  const wrapper = mount(
    <Provider store={store}>
      <Board {...state} actions={actions} />
    </Provider>
  );

  // NOTE: .top-left === green pad
  wrapper.find('.top-left').simulate('click');
  expect(actions.guess).toHaveBeenCalledWith({ id: 'green' });
});
