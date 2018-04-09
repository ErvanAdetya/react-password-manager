import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button
        type={ this.props.type || 'button' }
        className={ 'btn ' + this.props.className }
        onClick={ this.props.onClick }
        data-dismiss="modal"
      >{ this.props.name }</button>
    )
  }
}
