import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchingPasswords } from '../store/passwordsList/passwordsList.actions'

import PasswordsListTile from './PasswordsListTile';
import PasswordsListTileOption from './PasswordsListTileOption'; 

class PasswordsList extends Component {
  render() {
    return (
      <div className='container'>
        <PasswordsListTile
          className='passwordList-header'
          passwordData={{
              url: 'URL',
              email: 'Email',
              displayedPassword: 'Password',
              createdAt: 'Created At',
              updatedAt: 'Updated At',
          }}
          option='Option'
        />
        {
          this.props.passwordsList
            .filter((data) => ( data.url.indexOf(this.props.query) !== -1 ) && data.url)
            .map((passwordData) => {
              return <PasswordsListTile
                key={ passwordData.id }
                passwordData={ passwordData }
                option={ <PasswordsListTileOption
                  passwordData={ passwordData }
                /> }
              />
            })
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchingPasswords(this.props.user.id);
  }
}

const mapStateToProps = (state) => ({
  user : state.userReducer.user,
  passwordsList: state.passwordsListReducer.passwords,
  query: state.searchPasswordReducer.query
})

const mapDistpatchToProps = (dispatch) => bindActionCreators({
  fetchingPasswords
}, dispatch)

export default connect(mapStateToProps, mapDistpatchToProps)(PasswordsList)
