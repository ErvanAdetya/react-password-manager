import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { handleChangeQuery } from '../store/searchPassword/searchPassword.actions'

import Input from './Input';

class SearhBar extends Component {
  constructor() {
    super();
    this.state = {
      query:''
    };
  }

  handleChange = (event) => {
    this.props.handleChangeQuery(event.target.value)
  };
  
  render() {
    return (
      <div>
        <Input
          name='query'
          onChange={ this.handleChange }
          placeholder='search'
          value={ this.props.query }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.searchPasswordReducer.query
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  handleChangeQuery
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearhBar);

