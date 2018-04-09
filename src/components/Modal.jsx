import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true"
        id={ this.props.name }
        aria-labelledby={ this.props.name }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"
                id={ this.props.name + 'label' }
              >{ this.props.title }</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { this.props.modalBody }
            </div>
            <div className="modal-footer">
              { this.props.modalFooter }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
