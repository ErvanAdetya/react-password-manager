import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
        <input
          className={ 'form-control ' + this.props.className }
          type={ this.props.type || 'text' }
          name={ this.props.name }
          value={ this.props.value }
          placeholder={ this.props.placeholder || this.props.value || this.props.name }
          onChange={ this.props.onChange }
        />
    )
  }
}
