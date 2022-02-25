import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

const Box = styled.div`
  width: 85%;
  margin: 0 auto;

  @media(max-width: 800px) {
    .container {
      width: 95%;
      margin: 0 auto;
    }
  }
`;

export default Container
