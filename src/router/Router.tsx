import React from 'react'
import { Route, Switch } from 'react-router'
import { About, Main, NotFound } from 'components/Pages'

export const Router = () => {
  return (
    <Switch>
      <Route exact strict sensitive path='/'>
        <Main />
      </Route>
      <Route exact strict sensitive path='/about'>
        <About />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
