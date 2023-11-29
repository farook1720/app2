import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function NewMenu() {

  return (
    <>
      <div>
        <Button color='blue' size='large' as={Link} to='/' >Home</Button>
        <Button color='blue' size='large' as={Link} to='/cals' >Cals</Button>
        <Button  as={Link} to='/books' color='blue' size='large'>Books</Button>
        <Button as={Link} to='/myitems' color='blue' size='large'>Myitems</Button>
        <Button as={Link} to='/States' color='blue' size='large'>States</Button>
        <Button as={Link} to='/TodolistPra' color='blue' size='large'>TodolistPra</Button>
        <Button as={Link} to='/MyTodolist' color='blue' size='large'>MyTodolist</Button>
        <Button as={Link} to='/TodoLocal' color='blue' size='large'>TodoLocal</Button>
      </div>
      <hr />
      <div style={{ padding: 10 }}>

        <Outlet />
      </div>
      <hr />
    </>

  )
}
