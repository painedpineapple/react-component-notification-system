import React from 'react'
//
import { Notification as Container } from './index.style'

type tProps = {}

type tState = {}

export default class Notification extends React.Component<tProps, tState> {
  render() {
    return <Container>{this.props.message}</Container>
  }
}
