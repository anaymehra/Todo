import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(e)=>{props.delete(props.id)}} className="delBtn"><i className="fas fa-trash-alt"></i></button>
    </div>
  );
}

export default Note;
