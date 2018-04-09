import React, { Component } from 'react';
// import TrueFalseIcon from './TrueFalseIcon';

export default class NewPasswordFooterCondition extends Component {
  
  render() {
    return (
      <div>
          {/* <TrueFalseIcon status={ this.props.condition }/> */}
        <p>
          {JSON.stringify(this.props.condition)} { this.props.text }
        </p>
      </div>
    )
  }
}
