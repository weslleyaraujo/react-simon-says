import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pads, { PadsByComponentName } from './Pads';

it('renders Pads correctly', () => {

  const wrapper = shallow(
    <div>
      {Object.keys(PadsByComponentName).map((pad, i) => (
        <Pads pad={pad} key={i} />
      ))}
    </div>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

