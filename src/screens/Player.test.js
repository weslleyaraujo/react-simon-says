import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Player } from './Player';
import audios from '../audios';

it('renders Player correctly', () => {
  const wrapper = shallow(
    <Player />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});


it('executes play after component updates', () => {
  const active = Object.keys(audios)[0];
  const wrapper = mount(
    <Player active={null} />
  );

  const player = wrapper.instance().refs[active];
  player.play = jest.fn();
  wrapper.setProps({ active });
  expect(player.play).toHaveBeenCalled();
});
