import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { useStore } from 'effector-react'
import { $isMenuOpen, closeMenu, openMenu } from 'store'

import { useStyles } from './useStyles'
import { LeftMenuList } from 'components/LeftMenuList'
export const LeftMenu = () => {
  const classes = useStyles()
  const isMenuOpen = useStore($isMenuOpen)

  return (
    <SwipeableDrawer
      variant={'persistent'}
      open={isMenuOpen}
      onClose={() => closeMenu()}
      onOpen={() => openMenu()}
      PaperProps={{
        classes: {
          root: classes.paperRoot,
        },
      }}>
      <LeftMenuList />
    </SwipeableDrawer>
  )
}
