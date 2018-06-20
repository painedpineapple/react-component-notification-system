// @flow
import React from 'react'
//
import Container from './index.style'
import IconClose from '../Icons/icon-close'

type tProps = {
  message: string,
  id: string | number,
  status: string,
  dismiss: (id: string | number) => any,
}

export default class Notification extends React.Component<tProps> {
  render() {
    return (
      <Container status={this.props.status}>
        <div className="title-bar">
          <div className="title">{this.props.status}!</div>
          <button onClick={() => this.props.dismiss(this.props.id)}>
            <IconClose />
          </button>
        </div>
        {this.props.status === 'error' && <div className="title-bar" />}
        <div className="content">
          <div>{this.props.message}</div>
        </div>
      </Container>
    )
  }
}
