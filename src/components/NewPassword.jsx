import React, { Component } from 'react';

import ModalButton from './ModalButton';
import Modal from './Modal';
import NewPasswordBody from './NewPasswordBody';
import NewPasswordFooter from './NewPasswordFooter';

export default class NewPassword extends Component {
  render() {
    return (
      <div>
        <ModalButton
          name='Create New Password'
          className='btn-outline-primary'
          modalName='newPassword'
        />
        <Modal
          name='newPassword'
          title='Create New Password'
          modalBody = { <NewPasswordBody/> }
          modalFooter = { <NewPasswordFooter/> }
        />
      </div>
    )
  }
}
