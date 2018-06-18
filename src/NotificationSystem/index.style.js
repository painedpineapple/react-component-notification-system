import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  position: 'absolute',
  top: 30,
  right: 45,

  li: {
    listStyle: 'none',
    paddingBottom: 10,
    width: 200,
    maxWidth: '100%',
  },

  ...o.styles,
}))
