import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import NotificationBar from './NotificationSystem/NotificationBar'
import NotificationSystem from './NotificationSystem'
import customStyles, { P } from './style'
import Notification from './Notification'

class App extends React.Component {
  render() {
    return (
      <NotificationSystem>
        {({ clearNotifications, setNotification, removeNotification }) => {
          return (
            <div>
              <NotificationBar
                options={{
                  styles: customStyles,
                  notification: Notification,
                }}
              />
              <div className="btn-wrapper">
                <button
                  onClick={() =>
                    setNotification({
                      message: faker.random.word(),
                      id: faker.random.uuid(),
                      dismiss: removeNotification,
                    })
                  }
                >
                  Add Notification
                </button>
                <button onClick={() => clearNotifications()}>
                  Clear Notifications
                </button>
              </div>
              <div style={{ marginTop: 80 }}>
                {_.times(20, () => (
                  <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
                ))}
              </div>
            </div>
          )
        }}
      </NotificationSystem>
    )
  }
}

render(<App />, document.getElementById('root'))
