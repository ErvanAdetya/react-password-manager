import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button
        className={ 'btn ' + this.props.className }
        data-toggle="modal"
        data-target={ '#' + this.props.modalName }
        onClick={ this.props.onClick }
      >{ this.props.name }</button>
    )
  }
}
