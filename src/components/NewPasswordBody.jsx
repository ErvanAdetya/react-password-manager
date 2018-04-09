import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { savePasswordHandleChange } from '../store/newPassword/newPassword.actions';
import { passwordChecker } from '../store/passwordChecker/passwordChecker.actions';
import Input from './Input';

export class NewPasswordBody extends Component {
  handleChange = (event) => {
    let payload = {
      name: event.target.name,
      value: event.target.value
    }
    this.props.savePasswordHandleChange(payload)
  };

  handlePasswordChange = (event) => {
    this.handleChange(event);
    this.props.passwordChecker(event.target.value);
  }

  render() {
    return (
      <form>
        <div>
          <div className="form-group">
            <Input
              name='url'
              onChange={ this.handleChange }
              value={ this.props.newPassword.url }
            />
          </div>
          <div className="form-group">
            <Input
              name='email'
              onChange={ this.handleChange }
              value={ this.props.newPassword.email }
            />
          </div>
          <div className="form-group">
            <Input
              type='password'
              name='password'
              onChange={ this.handlePasswordChange }
              value={ this.props.newPassword.password }
            /> 
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  condition: state.passwordCheckerReducer,
  newPassword: state.newPasswordReducer
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  savePasswordHandleChange,
  passwordChecker
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordBody);
