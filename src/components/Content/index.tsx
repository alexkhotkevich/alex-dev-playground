import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { useStyles } from './useStyles'

export const Content: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid container direction='column' alignItems='center' classes={classes} className={classes.dusk}>
      <Paper classes={{ root: classes.paperRoot }}>
        {/* <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{ width: '100%', height: '100%' }}> */}
        {children}
        {/* </Grid> */}
      </Paper>
    </Grid>
  )
}
