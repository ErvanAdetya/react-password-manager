import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import { Login } from './Login';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let mockUser = {
  email:'',
  password:'',
  name:''
};
let mockMessage = {
  text:'',
  className:''
};

// beforeEach(() => {
//   wrapper = shallow( <Login store={ store } /> )
// });

describe('Login Page Test', () => {
  it('render', () => {
    wrapper = shallow( <Login
      store={ store }
      user={ mockUser }
      message={ mockMessage }
    /> )
    expect(wrapper).toBeDefined()
  })
})