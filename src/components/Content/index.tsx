import React from 'react'
import { Box, Grid, Paper } from '@material-ui/core'

import avatar from 'assets/img/avatar.svg'

export const Content = () => {
  return (
    <Grid container direction='column' justify='center' alignItems='center' style={{ minHeight: '100vh' }}>
      <Paper style={{ width: '61.8vw', marginTop: 80 }}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{ width: '100%', height: '100%' }}>
          <Box p={2}>
            <img src={avatar} className='App-logo' alt='logo' />
          </Box>
        </Grid>
      </Paper>
    </Grid>
  )
}
