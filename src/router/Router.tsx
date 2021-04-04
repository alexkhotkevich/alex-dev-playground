import React from 'react'
import { Route, Switch } from 'react-router'
import { Main } from 'components/Main'
export const Router = () => {
  return (
    <Switch>
      <Route exact strict sensitive path='/'>
        <Main />
      </Route>
    </Switch>
  )
}
