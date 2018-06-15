import React from 'react'
//
import Container from './index.style'

type tProps = {
  options: {
    styles?: {},
  },
}

type tState = {}

export default class Component extends React.Component<tProps, tState> {
  render() {
    const { options, ...attrs } = this.props
    return (
      <Container
        {...attrs}
        options={{
          ...options,
          styles: options ? options.styles || {} : {},
        }}
      >
        Hello World
      </Container>
    )
  }
}
