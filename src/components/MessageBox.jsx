import React, { Component } from 'react'

export default class MessageBox extends Component {
  render() {
    return (
      <div className={ this.props.className}>
        <span>{ this.props.message }</span>
      </div>
    )
  }
}
