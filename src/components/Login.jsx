import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { searchUser } from '../store/user/user.actions';

import Input from './Input';
import Button from './Button';
import MessageBox from './MessageBox'
import LoadingButton from './LoadingButton';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signin = () => {
    this.props.searchUser(this.state)
  };

  render() {
    if (this.props.user.email) {
      return <Redirect push to="/" />;
    }
    return (
      <div>
        Login
        Email : <Input
          name='email'
          onChange={ this.handleChange }
        />
        Password : <Input
          type='password'
          name='password'
          onChange={ this.handleChange }
        />
        { this.props.searchUserLoading?
          <LoadingButton/>
          :
          <Button
            name='Signin'
            className='btn-success'
            onClick = { this.signin }
          />
        }
        <Link to='/register'>
          <Button
            name='Register'
            className='btn-outline-warning'
          />
        </Link>
        <MessageBox
          message={ this.props.message.text }
          className={ this.props.message.className }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.userReducer.user,
  searchUserLoading: state.userReducer.searchUserLoading,
  error : state.userReducer.error,
  message: state.messageReducer
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
