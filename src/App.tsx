import React, { useEffect } from 'react'

import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { useStore } from 'effector-react'

import { useLocalStorage } from 'hooks'

import { TopAppBar } from 'components/TopAppBar'
import { LeftMenu } from 'components/LeftMenu'
import { Content } from 'components/Content'

import { $theme, setTheme } from 'store'

export const App = () => {
  const theme = useStore($theme)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [dark, setDark] = useLocalStorage<boolean>('dark')

  // const isWide = useMediaQuery('(min-aspect-ratio: 16/10)')
  // const isUltraWide = useMediaQuery('(min-aspect-ratio: 18/9)')

  useEffect(() => {
    setTimeout(() => {
      dark === undefined && setDark(prefersDarkMode)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode])

  useEffect(() => {
    setTheme(dark ? 'dark' : 'light')
  }, [dark])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopAppBar />
        <LeftMenu />
        <Content />
      </ThemeProvider>
    </BrowserRouter>
  )
}
