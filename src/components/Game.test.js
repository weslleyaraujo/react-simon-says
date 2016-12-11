import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Game from './Game';

it('renders correctly', () => {
  const wrapper = shallow(
    <Game />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly when disabledPointer', () => {
  const wrapper = shallow(
    <Game disabledPointer={true} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

