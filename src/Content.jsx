import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Content(props){
    function handleDelete(){
        props.deleteItem(props.id)
    }
    return (
        <div className="noteBox">
            <h1>{props.title}</h1>
            <p>
               {props.content}
            </p>

            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}

export default Content