import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { savingPassword } from '../store/newPassword/newPassword.actions';

import Button from './Button';
import ButtonDisabled from './ButtonDisabled';

import NewPasswordFooterCondition from './NewPasswordFooterCondition'

class newPasswordFooter extends Component {
  savePassword = () => {
    let displayedPassword = ''
    Array.prototype.map.call(this.props.newPassword.password, (val) => {
      displayedPassword += '*'
    });
    let payload = {
      userId: this.props.user.id,
      newPassword:{ ...this.props.newPassword }
    }
    payload.newPassword.displayedPassword = displayedPassword;

    console.log(this.props.newPassword)
    console.log(this.props.newPassword.id)
    
    console.log('ini sebelum kirim ke action', payload.newPassword)    
    console.log('ini sebelum kirim ke action', payload.newPassword.id)
    console.log('ini sebelum kirim ke action', payload.newPassword.url)
    
    this.props.savingPassword(payload)
  }

  render() {
    return (
      <div>
        {
          this.props.condition.requirement ? 
            <Button
              name='Save Password'
              className='btn-success'
              onClick = { this.savePassword }
            />
          :
            <ButtonDisabled
              name='Cannot Save'
              className='btn-warning'
            /> 
        }
        <NewPasswordFooterCondition
          text='Password harus memiliki setidaknya satu karakter huruf besar (upper-case)'
          condition={ this.props.condition.uppercase }
        />
        <NewPasswordFooterCondition
          text='Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)'
          condition={ this.props.condition.lowercase }
        />
        <NewPasswordFooterCondition
          text='Password harus memiliki setidaknya satu karakter huruf special (#$@!&%...)'
          condition={ this.props.condition.specialchar }
        />
        <NewPasswordFooterCondition
          text='Password harus memiliki setidaknya satu angka'
          condition={ this.props.condition.numeric }
        />
        <NewPasswordFooterCondition
          text={ `Password harus memiliki panjang (length) lebih dari 5 karakter` }
          condition={ this.props.condition.minLength }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.userReducer.user,
  newPassword: state.newPasswordReducer,
  condition: state.passwordCheckerReducer
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  savingPassword
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(newPasswordFooter);
