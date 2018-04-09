import React, { Component } from 'react';

// import ModalButton from '../../ModalButton';
import Modal from '../../Modal';
import ShowPasswordBody from './ShowPasswordBody';
import ShowPasswordFooter from './ShowPasswordFooter';

export default class ShowPassword extends Component {
  render() {
    return (
      <Modal
        name='verifiedAccountShowPassword'
        title='Input your password to verify'
        modalBody = { <ShowPasswordBody/> }
        modalFooter = { <ShowPasswordFooter
          passwordData={ this.props.passwordData }
        /> }
      />
    )
  }
}
