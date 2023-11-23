import React, { useState } from 'react'

export default function Students() {
  const [clr, setclr] = useState('orange')
  const x = { color: clr, fontsize: "30px" }
  function handleclr() {
    setclr('blue')
  }
  function handleclr2() {
    setclr('green')
  }
  return (
    <div>
      <button onClick={handleclr}>blue</button>
      <button onClick={handleclr2}>green</button>

      <h2 style={{ color: "red" }} >Basha</h2>
      <h2 style={{ color: "blue" }} >Basha</h2>
      <h2 style={{ color: "yellow" }} >Basha</h2>
      <h2 style={{ color: "orange" }} >Basha</h2>

      <h3 style={x}>hello world </h3>
      <h3 style={x}>hello world </h3>
      <h3 style={x}>hello world </h3>
      <h3 style={x}>hello world </h3>
      <h3 style={x}>hello world </h3>

      <p style={ss.para}>how are you my friend</p>
      <p style={ss.para}>how are you my friend</p>
      <p style={ss.para}>how are you my friend</p>
      <p style={ss.para}>how are you my friend</p>
      <p style={ss.para}>how are you my friend</p>

      <h4 style={ss.h4}>I am fine my friend</h4>
      <h5 style={ss.h5}>how are you my buddy</h5>

    </div>
  )
}
const ss = {
  h4: {
    color: 'blue',
    backgroundColor: 'pink',
    fontSize: 30
  },
  h5: {
    textDecoration: 'underline'
  },
  para: {
    textAlign: 'center'
  }
}