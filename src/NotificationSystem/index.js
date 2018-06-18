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
    this.setState(prevState => {
      prevState.notifications.push(notification)

      return {
        ...prevState,
        notifications: prevState.notifications,
      }
    })
  }
  removeNotification = () => {}
  clearNotifications = () => {}
  render() {
    console.log(this.state.notifications)
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
