// @flow
import React from 'react'

export const { Provider, Consumer } = React.createContext([])

type tProps = {
  children: any => any,
  autoDismiss?: boolean,
  defaultDismissTimeout?: number,
}

type tState = {
  notifications: Array<{
    id: string | number,
    dismiss: (id: string) => any,
  }>,
}

export default class NotificationSystem extends React.Component<
  tProps,
  tState,
> {
  state = {
    notifications: [],
  }
  autoDismiss = true
  defaultDismissTimeout = 10000
  constructor(props: tProps) {
    super(props)

    if (this.props.autoDismiss === false) this.autoDismiss = false
    this.defaultDismissTimeout =
      this.props.defaultDismissTimeout || this.defaultDismissTimeout
  }
  setNotification = notification => {
    if (!notification.dismiss)
      console.error(
        'Error! You need to set the "dismiss" prop on each notification. This should have the value of the "removeNotification" function that comes from the NotificationSystem component.',
      )
    if (!notification.id)
      console.error('Error! Each notification needs a unique "id" prop.')

    this.setState(prevState => {
      prevState.notifications.push(notification)

      return {
        ...prevState,
        notifications: prevState.notifications,
      }
    })

    if (this.autoDismiss && !notification.dismissTimeout) {
      setTimeout(() => {
        this.removeNotification(notification.id)
      }, this.defaultDismissTimeout)
    }

    if (notification.dismissTimeout) {
      setTimeout(() => {
        this.removeNotification(notification.id)
      }, notification.dismissTimeout)
    }
  }
  removeNotification = id => {
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(item => item.id !== id),
    }))
  }
  clearNotifications = () => {
    this.setState({
      notifications: [],
    })
  }
  render() {
    return (
      <Provider value={this.state.notifications}>
        {this.props.children({
          removeNotification: this.removeNotification,
          setNotification: this.setNotification,
          clearNotifications: this.clearNotifications,
        })}
      </Provider>
    )
  }
}
