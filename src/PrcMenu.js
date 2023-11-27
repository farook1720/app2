import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function PrcMenu() {


  return (

    <>
      <div>
        <Button color='blue' size='large' as={Link} to='/'  >Home</Button>
        <Button color='blue' size='large' as={Link} to='/Cals'  >Cals</Button>
        <Button color='blue' size='large' as={Link} to='/Books'  >Books</Button>
        <Button color='blue' size='large' as={Link} to='/Myitems'  >Myitems</Button>
        <Button color='blue' size='large' as={Link} to='/States'  >States</Button>
      </div>
      <hr />
      <div style={{ padding:10 }}>
        <Outlet />

      </div>
      <hr /></>
  )
}
