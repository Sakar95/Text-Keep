import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Content from "./Content";


function App() {

    const [notes, setNotes] = useState([]);



    function addNote(newNote) {
        setNotes(prevValue => {
            return [...prevValue, newNote]
        })
    }

    function onDelete(id) {
        setNotes(prevValue => {
            return prevValue.filter((noteItem, index) => {
                return index !== id
            })
        })
    }

    return (
        <>
            <Header />
            <CreateNote onAdd={addNote} />
            {notes.map((noteItem, index) => {

                if(noteItem.title!==""  && noteItem.content)  return <Content key={index} id={index} title={noteItem.title} content={noteItem.content} deleteItem={onDelete} />

            })}

        </>
    )
}

export default App