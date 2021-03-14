import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { toggleMenu, toggleTheme } from 'store'

import { useStyles } from './useStyles'

import { MenuIcon, BrightnessIcon } from 'icons'
import { useLocalStorage } from 'hooks'

export const TopAppBar = () => {
  const classes = useStyles()
  const [dark, setDark] = useLocalStorage('dark')

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => toggleMenu()}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Alex Playground
          </Typography>
          <IconButton
            color='inherit'
            edge='end'
            aria-label='toggle theme'
            onClick={() => {
              toggleTheme()
              setDark(!dark)
            }}>
            <BrightnessIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
