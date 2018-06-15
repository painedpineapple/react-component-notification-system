import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  ...o.styles,
}))
