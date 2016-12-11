import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

it('renders correctly', () => {
  const wrapper = shallow(
    <Header />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

