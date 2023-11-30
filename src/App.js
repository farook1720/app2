import React from 'react'
import Cals from './Cals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Students from './Students'
import Books from './Books'
import Nopage from './Nopage'
import States from './States'
import TodolistPra from './TodolistPra'
import MyTodolist from './MyTodolist.'
import TodoLocal from './TodoLocal'
import MyTodolocal from './MyTodolocal'
import CatFacts from './CatFacts'
import Btc from './Btc'

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewMenu />} >
            <Route path="" element={<Students />} />
            <Route path="cals" element={<Cals />} />
            <Route path="books" element={<Books />} />
            <Route path="States" element={<States />} />
            <Route path="TodolistPra" element={<TodolistPra />} />
            <Route path="MyTodolist" element={<MyTodolist />} />
            <Route path="TodoLocal" element={<TodoLocal />} />
            <Route path="MyTodoLocal" element={<MyTodolocal />} />
            <Route path="CatFacts" element={<CatFacts />} />
            <Route path="btc" element={<Btc />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}

function NewMenu() {

  return (
    <>
      <div>
        <Button color='blue' size='large' as={Link} to='/' >Home</Button>
        <Button color='blue' size='large' as={Link} to='/cals' >Cals</Button>
        <Button as={Link} to='/books' color='blue' size='large'>Books</Button>
        <Button as={Link} to='/myitems' color='blue' size='large'>Myitems</Button>
        <Button as={Link} to='/States' color='blue' size='large'>States</Button>
        <Button as={Link} to='/TodolistPra' color='blue' size='large'>TodolistPra</Button>
        <Button as={Link} to='/MyTodolist' color='blue' size='large'>MyTodolist</Button>
        <Button as={Link} to='/TodoLocal' color='blue' size='large'>TodoLocal</Button>
        <Button as={Link} to='/MyTodoLocal' color='blue' size='large'>MyTodoLocal</Button>
        <Button as={Link} to='/CatFacts' color='blue' size='large'>CatFacts</Button>
        <Button as={Link} to='/btc' color='blue' size='large'>BTC</Button>
      </div>
      <hr />
      <div style={{ padding: 10 }}>

        <Outlet />
      </div>
      <hr />
    </>

  )
}