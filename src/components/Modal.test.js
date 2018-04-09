import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import Modal from './Modal';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow( <Modal /> )
});

describe('<Modal /> Component Test', () => {
  it('render', () => {
    expect(wrapper).toBeDefined()
  })
})