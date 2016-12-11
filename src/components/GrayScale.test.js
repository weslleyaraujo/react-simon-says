import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GrayScale from './GrayScale';

it('renders correctly', () => {
  const wrapper = shallow(
    <GrayScale />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly when disabled', () => {
  const wrapper = shallow(
    <GrayScale disabled={true} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

