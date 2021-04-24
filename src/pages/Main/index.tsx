import React from 'react'
import avatar from 'assets/img/avatar.svg'
import { Card } from 'components/Card'
export const Main = () => {
  return (
    <Card>
      <img src={avatar} className='App-logo' alt='logo' />
    </Card>
  )
}
