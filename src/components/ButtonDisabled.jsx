import React, { Component } from 'react'

export default class ButtonDisabled extends Component {
  render() {
    return (
      <button
        type={ this.props.type || 'button' }
        className={ 'btn ' + this.props.className }
        disabled
      >{ this.props.name }</button>
    )
  }
}
