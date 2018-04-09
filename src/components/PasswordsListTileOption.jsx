import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import database from '../firebase'
import { fetchingPasswords } from '../store/passwordsList/passwordsList.actions';
import { editPasswordModal } from '../store/showModal/showModal.actions';
import { setNewPasswordValue } from '../store/newPassword/newPassword.actions'

import Button from './Button';
import ModalButton from './ModalButton';
import ShowPassword from './modal/showPassword/ShowPassword';
import EditPassword from './modal/editPassword/EditPassword'

class PasswordsListTileOption extends Component {
  deletePassword = () => {
    let userId = this.props.user.id;
    let passwordId = this.props.passwordData.id
    database().ref(`users/${userId}/passwordsList`).child(passwordId).remove()
    .then(() => {
      this.props.fetchingPasswords(userId)
    })
  }

  editPasswordTriger = () => {
    this.props.setNewPasswordValue(this.props.passwordData)
  }

  render() {
    return (
      <div>
        <ModalButton
          name={ <i className="fas fa-eye"></i> }
          className='btn-primary'
          modalName='verifiedAccountShowPassword'
        />
        <ModalButton
          name={ <i className="far fa-edit"></i> }
          className='btn-success'
          modalName='editPassword'
          onClick={ this.editPasswordTriger }
        />
        <Button
          className='btn-danger'
          name={ <i className="fas fa-trash-alt"></i> }
          onClick={ this.deletePassword }
        />
        <ShowPassword
          passwordData={ this.props.passwordData }
        />
        <EditPassword
          passwordData={ this.props.passwordData }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.userReducer.user,
  passwordsList: state.passwordsListReducer.passwords
})

const mapDistpatchToProps = (dispatch) => bindActionCreators({
  fetchingPasswords,
  editPasswordModal,
  setNewPasswordValue
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(PasswordsListTileOption)

