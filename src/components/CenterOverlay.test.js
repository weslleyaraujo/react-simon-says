import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CenterOverlay from './CenterOverlay';

it('renders correctly', () => {
  const wrapper = shallow(
    <CenterOverlay />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

