import styled from 'react-emotion'

export default {
  top: '',
  bottom: 45,
}

export const P = styled('p')(() => ({
  maxWidth: '800px',
  fontSize: 18,
  margin: 30,
}))

export const Notification = styled('div')(props => ({
  background: '#bbb',
  color: '#fff',
  fontSize: 14,
  padding: 10,
  borderRadius: 3,
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  position: 'relative',

  '.title': { padding: 0 },

  button: {
    color: '#fff',
    position: 'absolute',
    background: 'rgba(0,0,0,0)',
    border: 'none',
    cursor: 'pointer',
    padding: 10,
    top: -8,
    right: 5,
    marginTop: 10,
  },
}))
