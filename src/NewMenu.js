import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function NewMenu() {

  return (
    <>
      <div>
        <Button as={Link} to='/' color='blue' size='large'>home</Button>
        <Button as={Link} to='/cals' color='blue' size='large'>Cals</Button>
        <Button as={Link} to='/books' color='blue' size='large'>Books</Button>
        <Button as={Link} to='/myitems' color='blue' size='large'>myitems</Button>
      </div>
      <hr />
      <div style={{ padding: 10 }}>

        <Outlet />
      </div>
      <hr />
    </>

  )
}
