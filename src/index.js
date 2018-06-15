import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import NotificationBar from './NotificationSystem/NotificationBar'
import NotificationSystem from './NotificationSystem'
import customStyles, { P } from './style'

class App extends React.Component<{}, { isActive: boolean }> {
  state = {
    notifications: [],
  }
  render() {
    return (
      <React.Fragment>
        <NotificationBar
          options={{
            styles: customStyles,
          }}
        />
        <NotificationSystem>
          {({ clearNotifications, setNotification, removeNotification }) => {
            return (
              <div>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      setNotification({
                        message: 'Hello',
                      })
                    }
                  >
                    Add Notification
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
      </React.Fragment>
    )
  }
}

render(<App />, document.getElementById('root'))
