import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Welcome from './Welcome';

it('renders Welcome correctly', () => {
  const wrapper = shallow(
    <Welcome />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

