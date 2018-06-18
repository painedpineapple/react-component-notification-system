// @flow
import React from 'react'
//
import Container from './style'

type tProps = {
  message: string,
  id: string | number,
  dismiss: (id: string | number) => any,
}

export default class Notification extends React.Component<tProps> {
  render() {
    return (
      <Container>
        {this.props.message}
        <br />
        <button onClick={() => this.props.dismiss(this.props.id)}>X</button>
      </Container>
    )
  }
}
