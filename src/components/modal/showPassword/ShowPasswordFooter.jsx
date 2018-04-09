import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../../Button';
import { showPassword } from '../../../store/passwordsList/passwordsList.actions'

class ShowPasswordFooter extends Component {
  showPassword = () => {
    let payload = {
      userId: this.props.user.id,
      passwordId: this.props.passwordData.id
    }
    this.props.showPassword(payload)
  }
  render() {
    return (
      <div>
        <Button
          className='btn-success'
          name='Submit'
          onClick={ this.showPassword }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showPassword
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowPasswordFooter);
