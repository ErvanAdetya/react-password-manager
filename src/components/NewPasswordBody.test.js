import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import { NewPasswordBody } from './NewPasswordBody';

Enzyme.configure({ adapter: new Adapter() });


let wrapper;
let mockUser = {
  email:'',
  password:'',
  name:''
};
let mockPassword = {
  url:'',
  email:'',
  password:''
}

// beforeEach(() => {
//   wrapper = shallow( <NewPasswordBody
//     store={ store }
//     user={ mockUser }/> )
// });

describe('<NewPasswordBody /> Component Test', () => {
  it('render', () => {
    wrapper = shallow( <NewPasswordBody
      store={ store }
      user={ mockUser }
      newPassword={ mockPassword }
    /> )
    expect(wrapper).toBeDefined()
  })
})