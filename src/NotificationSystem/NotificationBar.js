import React from 'react'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'
import { Consumer } from './'

type tProps = {
  notification: any, // React Component
  options: {
    styles?: {},
  },
}

class NotificationBar extends React.Component<{
  ...tProps,
  notifications: [],
}> {
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
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 'auto' }}
          leave={{ opacity: 0, height: 0 }}
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
