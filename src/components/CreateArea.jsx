import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {

  const [note,setNote] = useState({title: "", content: ""});
  const [isExpanded, setExpanded] = useState(false)
  const [rows,setRows] = useState(1)
  function handleClick() {
    setExpanded((prevValue)=>{
      return !prevValue
    })
    setRows(3)
  }
  function inputChange(event) {
    const {name,value} = event.target;
    setNote((prevNotes) => {
      return {...prevNotes, [name]: value} // IMP - Actually copied tis
    });
  }

  function submitButton(event) {
    props.add(note); 
    event.preventDefault();
    setNote({title:"", content: ""})
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange = {inputChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea onClick={handleClick} onChange = {inputChange} name="content" placeholder="Take a note..." rows={rows} value={note.content}/>
        <Zoom in={isExpanded}><Fab onClick={submitButton}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
