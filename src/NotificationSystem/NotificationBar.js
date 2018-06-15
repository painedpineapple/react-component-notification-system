import React from 'react'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'
import { Consumer } from './'
import Notification from './Notification'

type tProps = {
  options: {
    styles?: {},
  },
}

type tState = {}

class NotificationBar extends React.Component<
  {
    ...tProps,
    notifications: [],
  },
  tState,
> {
  render() {
    console.log('notifications in bar', this.props.notifications)
    const { options, ...attrs } = this.props
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
          keys={this.props.notifications.map(item => item.key)}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 'auto' }}
          leave={{ opacity: 0, height: 0 }}
        >
          {this.props.notifications.map(item => styles => (
            <animated.li style={styles}>
              <Notification
              //                 message={item.message}
              //                 status={item.status}
              //                 title={item.title}
              //                 dismiss={() => this.dismiss(item.key)}
              >
                {item.message}
              </Notification>
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
        console.log('notifications in render notif. bar', notifications)
        return <NotificationBar {...props} notifications={notifications} />
      }}
    </Consumer>
  )
}
