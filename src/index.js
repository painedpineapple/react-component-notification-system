import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import Component from './Component'
import customStyles, { P } from './style'

class App extends React.Component<{}, { isActive: boolean }> {
  render() {
    return (
      <div>
        <Component
          options={{
            styles: customStyles,
          }}
        />
        <div style={{ marginTop: 80 }}>
          {_.times(20, () => (
            <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
          ))}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
