import React, { useEffect } from 'react'

import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { useStore } from 'effector-react'

import { TopAppBar } from 'components/TopAppBar'
import { LeftMenu } from 'components/LeftMenu'
import { Content } from 'components/Content'

import { $theme, setTheme } from 'store'

export const App = () => {
  const theme = useStore($theme)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  console.log(window.visualViewport.width)
  console.log(window.visualViewport.height)
  // const isWide = useMediaQuery('(min-aspect-ratio: 16/10)')
  // const isUltraWide = useMediaQuery('(min-aspect-ratio: 18/9)')

  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

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
