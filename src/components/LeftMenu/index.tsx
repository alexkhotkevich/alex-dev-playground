import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useStore } from 'effector-react'
import { $isMenuOpen, closeMenu, openMenu } from 'store'

import { GitHubIcon, InfoIcon, VKIcon } from 'icons'

import { useStyles } from './useStyles'
export const LeftMenu = () => {
  const classes = useStyles()
  const isMenuOpen = useStore($isMenuOpen)

  const list = () => (
    <div className={classes.list} role='presentation'>
      <List>
        <ListItem button component='a' href='https://vk.com/' rel='noreferrer noopener' target='_blank'>
          <ListItemIcon>
            <VKIcon />
          </ListItemIcon>
          <ListItemText primary='VK' />
        </ListItem>
        <ListItem button component='a' href='https://github.com/' rel='noreferrer noopener' target='_blank'>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary='GitHub' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to='/about'>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <SwipeableDrawer variant={'persistent'} open={isMenuOpen} onClose={() => closeMenu()} onOpen={() => openMenu()}>
      <Toolbar />
      {list()}
    </SwipeableDrawer>
  )
}
