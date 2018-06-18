import React from 'react'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'
import { Consumer } from './'

type tProps = {
  notification: any, // React Component
  notifications: [],
  options?: {
    styles?: {},
    transitions?: {
      from?: {},
      enter?: {},
      leave?: {},
    },
  },
}

class NotificationBar extends React.Component<tProps> {
  transitions = {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto' },
    leave: { opacity: 0, height: 0 },
  }
  constructor(props: tProps) {
    super(props)

    if (props.options && props.options.transitions) {
      const { from, enter, leave } = props.options.transitions
      if (from) this.transitions.from = from
      if (enter) this.transitions.from = enter
      if (leave) this.transitions.from = leave
    }
  }
  render() {
    const { options: { notification, ...options }, ...attrs } = this.props
    const Notification = notification
    return (
      <Container
        {...attrs}
        options={{
          ...options,
          styles: options ? options.styles || {} : {},
        }}
      >
        <Transition
          native
          keys={this.props.notifications.map(item => item.id)}
          from={this.transitions.from}
          enter={this.transitions.enter}
          leave={this.transitions.leave}
        >
          {this.props.notifications.map(item => styles => (
            <animated.li style={styles}>
              <Notification {...item} />
            </animated.li>
          ))}
        </Transition>
      </Container>
    )
  }
}

export default function RenderNotificationBar(props: tProps) {
  return (
    <Consumer>
      {notifications => {
        return <NotificationBar {...props} notifications={notifications} />
      }}
    </Consumer>
  )
}
