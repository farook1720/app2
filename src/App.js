import React from 'react'
import Cals from './Cals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import MainMenu from './MainMenu'
import Students from './Students'
import NewMenu from './NewMenu'
import Books from './Books'
import Nopage from './Nopage'
import States from './States'
import TodolistPra from './TodolistPra'

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
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}
