import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Shell } from './Shell';

it('renders Shell correctly', () => {
  const wrapper = shallow(
    <Shell />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

