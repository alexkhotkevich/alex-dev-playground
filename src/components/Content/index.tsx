import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from './useStyles'

export const Content: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid container direction='column' alignItems='center' classes={classes} className={classes.dusk}>
      {children}
    </Grid>
  )
}
