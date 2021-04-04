import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { AppBar, IconButton, Link, Toolbar } from '@material-ui/core'

import { useLocalStorage } from 'hooks'
import { toggleMenu, toggleTheme } from 'store'
import { useStyles } from './useStyles'
import { BrightnessIcon, MenuIcon } from 'icons'

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

          <Link variant='h6' className={classes.title} component={RouterLink} to={'/'} color='inherit' underline='none'>
            Alex Playground
          </Link>

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
