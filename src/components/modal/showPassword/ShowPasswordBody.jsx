import React, { Component } from 'react';
import Input from '../../Input';

export default class NewPasswordBody extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <Input
            type='password'
            name='password'
            onChange={ this.handlePasswordChange }
          /> 
        </div>
      </form>
    )
  }
};
