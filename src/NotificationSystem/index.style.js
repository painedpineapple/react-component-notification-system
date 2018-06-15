import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  position: 'absolute',
  top: 30,
  right: 45,

  li: {
    listStyle: 'none',
  },

  ...o.styles,
}))

export const Notification = styled('div')(props => ({
  background: 'rebeccapurple',
  color: '#fff',
  padding: 30,
}))
