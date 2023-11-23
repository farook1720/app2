import React from 'react'
import { useState } from 'react'

export default function States() {
const [x, setx] =useState(12)
const [y, sety] =useState(10)

// function handlex(e) {setx(Number(e.target.value))}

  return (
    <div>
      <h1 style={{color: 'aqua',backgroundColor: 'black'}} >Arthmatic</h1>
      X : <input type='number' value={x} onChange={(e) => {setx(Number(e.target.value))}}/>
      Y : <input type='number' value={y} onChange={ (e) => {sety(Number(e.target.value))}}
      />
      <h3>{x} + {y} = {x + y}</h3>
      <h3>{x} - {y} = {x - y}</h3>
      <h3>{x} * {y} = {x * y}</h3>
      <h3>{x} / {y} = {x / y}</h3>

      <h3>{x} * 1 ={x * 1} </h3>
      <h3>{x} * 2 ={x * 2} </h3>
      <h3>{x} * 3 ={x * 3} </h3>
      <h3>{x} * 4 ={x * 4} </h3>
      <h3>{x} * 5 ={x * 5} </h3>
      <h3>{x} * 6 ={x * 6} </h3>
      <h3>{x} * 7 ={x * 7} </h3>
      <h3>{x} * 8 ={x * 8} </h3>
      <h3>{x} * 9 ={x * 9} </h3>
      <h3>{x} * 10 ={x * 10} </h3>
    </div>
  )
}
