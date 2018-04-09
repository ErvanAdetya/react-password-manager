import React, { Component } from 'react'

export default class TrueFalseIcon extends Component {
  render() {
    if(this.props.status) {
      return (
        <i className="fas fa-check-circle"></i>
      )
    } else  {
      return (
        <i className="fas fa-exclamation-circle"></i>
      )
    }
  }
}
