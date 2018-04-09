import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import NewPassword from './NewPassword';
import PasswordsList from './PasswordsList';
import SearchBar from './SearchBar';

export class Home extends Component {
  render() {
    if (!this.props.user.email) {
      return <Redirect push to="/login"/>;
    }
    return (
      <div>
        <SearchBar/>
        <NewPassword/>
        <PasswordsList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.userReducer.user
});

export default connect(mapStateToProps, null)(Home);
