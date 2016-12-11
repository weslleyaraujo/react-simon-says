import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Score from './Score';

it('renders correctly', () => {
  const wrapper = shallow(
    <Score />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
