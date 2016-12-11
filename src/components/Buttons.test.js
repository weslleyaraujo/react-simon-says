import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Button, ButtonLink } from './Buttons';

it('renders Button correctly', () => {
  const wrapper = shallow(
    <Button>foo bar</Button>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders ButtonLink correctly', () => {
  const wrapper = shallow(
    <ButtonLink>foo bar</ButtonLink>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

