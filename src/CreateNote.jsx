import React, { useState } from 'react'

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {

    const {name,value}=event.target
    setNote((prevNote)=>{

        return{
          ...prevNote,
          [name]:value
        }
      
    })
  }
  
  function handleClick(event){
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault()
  }

  return (
    <form className="createBox">
      <input
        name="title"
        value={note.title}
        type="text"
        placeholder='Title'
        onChange={handleChange} />

      <textarea
        name="content"
        value={note.content}
        rows="5"
        placeholder='Take a Note...'
        onChange={handleChange} />
      <button onClick={handleClick} >+</button>
    </form>

  )
}
