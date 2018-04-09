import React, { Component } from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';

import { NewPasswordFooter } from './NewPasswordFooter';

Enzyme.configure({ adapter: new Adapter() });


let wrapper;

// beforeEach(() => {
//   wrapper = shallow( <NewPasswordBody
//     store={ store }
//     user={ mockUser }/> )
// });

// describe('<NewPasswordFooter /> Component Test', () => {
//   it('render', () => {
//     wrapper = shallow( <NewPasswordFooter
//       store={ store }
//       // user={ mockUser }
//       // newPassword={ mockPassword }
//     /> )
//     expect(wrapper).toBeDefined()
//   })
// })