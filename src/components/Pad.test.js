import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pad from './Pad';

it('renders correctly', () => {
  const wrapper = shallow(
    <Pad color='red' />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly when active', () => {
  const wrapper = shallow(
    <Pad active={true} color='red' />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
