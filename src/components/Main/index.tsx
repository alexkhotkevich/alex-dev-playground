import { Box } from '@material-ui/core'
import React from 'react'
import avatar from 'assets/img/avatar.svg'
export const Main = () => {
  return (
    <Box p={2}>
      <img src={avatar} className='App-logo' alt='logo' />
    </Box>
  )
}
