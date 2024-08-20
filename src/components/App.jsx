import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])
  function addItem(note) {
    setNotes((prevItems)=>{
      return [...prevItems, note]
    })
  }
  function deleteItem(id) {
    // setNotes((prevItems)=>{
    //   return prevItems.filter((item, index)=>{
    //     index === id;
    //   });
    // })
    // let newNotes = [...notes];
    // newNotes.splice(id,1);
    // setNotes([...newNotes])
    // setNotes(notes.filter(note =>{
    //   note.id !== id
    // }))
    setNotes((prevNotes)=>{
      return prevNotes.filter((note,index)=>{ // isse kya hoga ki new array me saare vo honge jiska index id me nhi h meaning jo delete nhi hone hai
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea add={addItem}/>
      {notes.map((note,index)=>{
        return <Note key={index} id={index} title={note.title} content={note.content} delete = {deleteItem}/>
      })
      }
      <Footer />
    </div>
  );
}

export default App;
