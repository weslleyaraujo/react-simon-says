import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from './Title';

it('renders correctly', () => {
  const wrapper = shallow(
    <Title value="foo bar" />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

