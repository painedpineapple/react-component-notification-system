import React from 'react'

export const { Provider, Consumer } = React.createContext([])

type tProps = {
  children: any => any,
}

type tState = {
  notifications: Array<{
    status: string,
    title: string,
    message: string,
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
  setNotification = notification => {
    console.log('setting notification', notification)
    this.setState(prevState => {
      notifications: prevState.notifications.push(notification)
    })
  }
  removeNotification = () => {}
  clearNotifications = () => {}
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
