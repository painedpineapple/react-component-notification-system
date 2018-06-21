// @flow
import React from 'react'

export const { Provider, Consumer } = React.createContext({
  notifications: [],
  setNotification: () => {},
  clearNotifications: () => {},
  removeNotification: () => {},
})

export default Consumer

type tProps = {
  children: any => any,
  autoDismiss?: boolean,
  defaultDismissTimeout?: number,
}

type tNotification = {
  id: string | number,
  dismiss: (id: string) => any,
  dismissTimeout?: number,
}

type tState = {
  notifications: Array<tNotification>,
  setNotification: (notification: tNotification) => void,
  clearNotifications: () => void,
  removeNotification: (id: number | string) => void,
}

export class NotificationSystemManager extends React.Component<tProps, tState> {
  autoDismiss = true
  defaultDismissTimeout = 10000
  constructor(props: tProps) {
    super(props)

    if (this.props.autoDismiss === false) this.autoDismiss = false
    this.defaultDismissTimeout =
      this.props.defaultDismissTimeout || this.defaultDismissTimeout
  }

  setNotification = (notification: tNotification) => {
    if (!notification.dismiss)
      // eslint-disable-next-line no-console
      console.error(
        'Error! You need to set the "dismiss" prop on each notification. This should have the value of the "removeNotification" function that comes from the NotificationSystem component.',
      )
    if (!notification.id) {
      // eslint-disable-next-line no-console
      console.error('Error! Each notification needs a unique "id" prop.')
    }

    this.setState(prevState => {
      prevState.notifications.push(notification)

      return {
        ...prevState,
        notifications: [
          ...prevState.notifications.filter(
            item => item.id !== notification.id,
          ),
          notification,
        ],
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
  removeNotification = (id: number | string) => {
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(item => item.id !== id),
    }))
  }
  clearNotifications = () => {
    this.setState({
      notifications: [],
    })
  }
  state = {
    notifications: [],
    removeNotification: this.removeNotification,
    setNotification: this.setNotification,
    clearNotifications: this.clearNotifications,
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}
