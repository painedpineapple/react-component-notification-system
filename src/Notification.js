import React from 'react'
//
import { Notification as Container } from './style'

type tProps = {}

type tState = {}

export default class Notification extends React.Component<tProps, tState> {
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
