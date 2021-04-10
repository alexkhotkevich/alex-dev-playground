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
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuButton} aria-label='menu' onClick={() => toggleMenu()}>
          <MenuIcon />
        </IconButton>
        <div className={classes.title}>
          <Link variant='h6' component={RouterLink} to={'/'} color='inherit' underline='none'>
            Alex Playground
          </Link>
        </div>

        <IconButton
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
  )
}
