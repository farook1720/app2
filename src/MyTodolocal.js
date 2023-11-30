import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

export default function MyTodolocal() {

  let oldDate =[]
  if (localStorage.getItem('myData')){

    oldDate = JSON.parse(localStorage.getItem ('myData'))
  }

  const [text, setText] = useState('')
  const [list, setList] = useState(oldDate)

  function deleteAll() {
    const newList = []
    setList(newList)
    localStorage.setItem('myData', JSON.stringify(newList))

  }
  function addItem(e) {
    e.preventDefault()
    if (text === '') return
    const newList = list.concat(text)
    setList(newList)
    localStorage.setItem('myData', JSON.stringify(newList))
    setText('')



  }
  function deleteOne(index) {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
    localStorage.setItem('myData', JSON.stringify(newList))



  }


  return (
    <div>

      <form onSubmit={addItem} >
        Item:
        <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} />
        <Button color='green' >ADD</Button>
      </form>
      <Button color='red' onClick={deleteAll} >DeleteAll</Button>
      {list.map((item, index) => {
        return (<li key={index} >{item}<button onClick={() => deleteOne(index)} >X</button></li>)
      })}
    </div>
  )
}
