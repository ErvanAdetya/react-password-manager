import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import ModalButton from './ModalButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow( <ModalButton /> )
});

describe('<ModalButton /> Component Test', () => {
  it('render', () => {
    expect(wrapper).toBeDefined()
  })
})