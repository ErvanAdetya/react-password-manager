import React, { Component } from 'react';
import { ddMonthYYY_Format } from '../helpers/timeFormater.helper'

export default class componentName extends Component {
  render() {
    return (
      <div className={ 'row passwordList ' + this.props.className }>
        <div className='col-md-3'>
          { this.props.passwordData.url }
        </div>
        <div className='col-md-2'>
          { this.props.passwordData.email }
        </div>
        <div className='col-md-1'>
          { this.props.passwordData.displayedPassword }
        </div>
        <div className='col-md-2'>
          { ddMonthYYY_Format(this.props.passwordData.createdAt) }
        </div>
        <div className='col-md-2'>
          { ddMonthYYY_Format(this.props.passwordData.updatedAt) }
        </div>
        <div className='col-md-2'>
          { this.props.option }
        </div>
      </div>
    )
  }
}
