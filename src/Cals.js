import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useState } from 'react'

export default function Cals() {
  const [x,setx] =useState(0)
  const [y,sety] =useState(0)

   

  return (
    
    <div>
      <h1>Arthamaic</h1>

      X : <input type='Number' value={x} onChange={(e) => setx(Number(e.target.value))}/>
      Y : <input type='Number' value={y} onChange={(e) => sety(Number(e.target.value))}/>


      <h3>{x} + {y} = {x + y}</h3>
      <h3>{x} - {y} = {x - y}</h3>
      <h3>{x} * {y} = {x * y}</h3>
      <h3>{x} / {y} = {x / y}</h3>
      <h3>{x} % {y} = {x % y}</h3>
    </div>
  )
}
