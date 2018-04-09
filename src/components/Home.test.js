import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import { Home } from './Home';

Enzyme.configure({ adapter: new Adapter() });


let wrapper;
let mockUser = {
  email:'',
  password:'',
  name:''
}

beforeEach(() => {
  wrapper = shallow( <Home
    store={ store }
    user={ mockUser }/> )
});

describe('Testing Home', () => {
  it('render', () => {
    expect(wrapper).toBeDefined()
  })
})