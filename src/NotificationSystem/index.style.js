import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  position: 'fixed',
  bottom: 45,
  right: 45,

  '.notification-wrapper': {
    paddingBottom: 10,
    width: 200,
    maxWidth: '100%',
  },

  '.content': {
    display: 'flex',
    width: '100%',
  },

  ...o.styles,
}))
