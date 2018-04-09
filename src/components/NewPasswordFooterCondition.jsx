import React, { Component } from 'react';
// import TrueFalseIcon from './TrueFalseIcon';

export default class NewPasswordFooterCondition extends Component {
  
  render() {
    return (
      <div>
        {
          this.props.condition?
            <small></small>
          :
            <small className='input-false'> { this.props.text } </small>
        }
      </div>
    )
  }
}
