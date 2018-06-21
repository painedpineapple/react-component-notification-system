import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import NotificationBar from './NotificationSystem/NotificationBar'
import NotificationSystem, {
  NotificationSystemManager,
} from './NotificationSystem'
import customStyles, { P } from './style'
import Notification from './components/Notification'

class App extends React.Component {
  render() {
    return (
      <NotificationSystemManager
      // defaultDismissTimeout={500}
      // autoDismiss={false}
      >
        <div>
          <NotificationBar
            options={{
              styles: customStyles,
              notification: Notification,
              // transitions: {
              //   from: { opacity: 1 },
              //   enter: { opacity: 1 },
              //   leave: { opacity: 1 }
              // }
            }}
          />
          <NotificationSystem>
            {({ setNotification, clearNotifications, removeNotification }) => (
              <div className="btn-wrapper">
                <button
                  onClick={() =>
                    setNotification({
                      message: faker.random.word(),
                      id: faker.random.uuid(),
                      status: 'success',
                      // status: "error",
                      dismiss: removeNotification,
                      // dismissTimeout: 3000,
                    })
                  }
                >
                  Add Notification
                </button>
                <button onClick={() => clearNotifications()}>
                  Clear Notifications
                </button>
              </div>
            )}
          </NotificationSystem>
          <div style={{ marginTop: 80 }}>
            {_.times(20, () => (
              <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
            ))}
          </div>
        </div>
      </NotificationSystemManager>
    )
  }
}

render(<App />, document.getElementById('root'))
