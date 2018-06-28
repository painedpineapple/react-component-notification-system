import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'
import NotificationSystem from './'

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
    mountStyle?: string,
    rootId?: string,
    mountId?: string,
  },
}

class NotificationBar extends React.Component<tProps> {
  root: any
  mount: any
  rootId: string
  moundId: string
  transitions = {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto' },
    leave: { opacity: 0, height: 0 },
  }
  constructor(props: tProps) {
    super(props)

    const options = this.props.options || {}

    if (options && options.transitions) {
      const { from, enter, leave } = options.transitions
      if (from) this.transitions.from = from
      if (enter) this.transitions.from = enter
      if (leave) this.transitions.from = leave
    }

    if (typeof document != 'undefined') {
      this.moundId = options.mountId || 'root-notification-bar'
      this.root = document.getElementById(options.rootId || 'root')
      this.mount = document.createElement('div')

      this.mount.style =
        options && options.mountStyle
          ? options.mountStyle
          : 'position: absolute; z-index: 2000; top: 0; right: 0; bottom: 0'
    }
  }
  componentDidMount() {
    if (typeof document != 'undefined') {
      document.body.appendChild(this.mount)
    }
  }
  componentWillUnmount() {
    if (typeof document != 'undefined') {
      document.body.removeChild(this.mount)
    }
  }
  render() {
    const {
      options: { notification, ...options },
      notifications,
      ...attrs
    } = this.props
    const Notification = notification
    return ReactDOM.createPortal(
      <Container
        {...attrs}
        options={{
          ...options,
          styles: options ? options.styles || {} : {},
        }}
      >
        <Transition
          native
          keys={notifications.map(item => item.id)}
          from={this.transitions.from}
          enter={this.transitions.enter}
          leave={this.transitions.leave}
        >
          {this.props.notifications.map(item => styles => (
            <animated.div style={styles} className="notification-wrapper">
              <Notification {...item} />
            </animated.div>
          ))}
        </Transition>
      </Container>,
      this.mount,
    )
  }
}

export default function RenderNotificationBar(props: tProps) {
  return (
    <NotificationSystem>
      {({ notifications }) => {
        return <NotificationBar {...props} notifications={notifications} />
      }}
    </NotificationSystem>
  )
}
