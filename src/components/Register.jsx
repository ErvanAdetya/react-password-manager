import React, { Component } from 'react';
import database from'../firebase';

import { generate } from '../helpers/hash.helper';

import Input from './Input';
import Button from './Button';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  register = () => {
    let key  = database().ref('users/').push().key;
    let newUser = {
      id: key,
      email: this.state.email,
      password: generate(this.state.password)
    };
    database().ref(`users`).child(key).set(newUser);
    this.props.history.push(`/login`);
  }
  
  render() {
    return (
      <div>
        Name : <Input
          name = 'name'
          onChange = { this.handleChange }
        />
        Email : <Input
          name = 'email'
          onChange = { this.handleChange }
        />
        Password : <Input
          type = 'password'
          name = 'password'
          onChange = { this.handleChange }
        />
        <Button
          name = 'Register'
          className = 'btn-success'
          onClick = { this.register }
        />
      </div>
    )
  }
}
