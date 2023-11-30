import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default function MyTodolist() {

  const [text, setText] = useState('')
  const [list, setList] = useState([])

  function handleText(e) { 
    setText(e.target.value)
   }

  function addItem () {

    if (text === '') return

    let newList = list.concat(text)

    setList(newList)
    setText('')

  }


  return (
    <div>
      Item: <Input type='text' value={text} onChange={handleText} />

      <Button color='blue' onClick={addItem} >ADD</Button>
      <hr />
      <h1>MyTodolist</h1>
      <ol>
        {
          list.map ((item, index) => {

            return (<li key={index}>{item}</li>)
          })
        }

      </ol>
      <hr />
    </div>
  )
}
