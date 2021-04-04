import React from 'react'
import { Route, Switch } from 'react-router'
import { About, Main, NotFound, UIKit } from 'components/Pages'

export const Router = () => {
  return (
    <Switch>
      <Route exact strict sensitive path='/'>
        <Main />
      </Route>
      <Route exact strict sensitive path='/about'>
        <About />
      </Route>
      <Route exact strict sensitive path='/ui-kit'>
        <UIKit />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
