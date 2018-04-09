import React, { Component } from 'react';

import Modal from '../../Modal';
import NewPasswordBody from '../../NewPasswordBody';
import NewPasswordFooter from '../../NewPasswordFooter';

export default class EditPassword extends Component {
  render() {
    return (
      <Modal
        name='editPassword'
        title='Edit Password'
        modalBody = { <NewPasswordBody
          url={ this.props.passwordData.url }
          email={ this.props.passwordData.email }
        /> }
        modalFooter = { <NewPasswordFooter /> }
      />
    )
  }
}
