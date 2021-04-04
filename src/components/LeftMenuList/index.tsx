import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { FacebookIcon, GitHubIcon, InfoIcon, InstagramIcon, Layers, VKIcon } from 'icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './useStyles'
export const LeftMenuList = () => {
  const classes = useStyles()

  return (
    <div className={classes.list} role='presentation'>
      <List>
        <ListItem
          button
          component='a'
          href='https://github.com/alexkhotkevich'
          rel='noreferrer noopener'
          target='_blank'>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary='GitHub' />
        </ListItem>
        <ListItem button component='a' href='https://vk.com/alexkhotkevich' rel='noreferrer noopener' target='_blank'>
          <ListItemIcon>
            <VKIcon />
          </ListItemIcon>
          <ListItemText primary='VK' />
        </ListItem>
        <ListItem
          button
          component='a'
          href='https://www.facebook.com/alexkhotkevich'
          rel='noreferrer noopener'
          target='_blank'>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary='Facebook' />
        </ListItem>
        <ListItem
          button
          component='a'
          href='https://www.instagram.com/alexkhotkevich/'
          rel='noreferrer noopener'
          target='_blank'>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary='Instagram' />
        </ListItem>
      </List>
      <Divider light variant='middle' />
      <List>
        <ListItem button component={Link} to='/about'>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem button component={Link} to='/ui-kit'>
          <ListItemIcon>
            <Layers />
          </ListItemIcon>
          <ListItemText primary='UI kit' />
        </ListItem>
      </List>
    </div>
  )
}
