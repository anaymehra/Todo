import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

// MIstake 1 - Looked at chat.gpt for more hints
// Mistake 2 - onClick of add button has to be done something like this : 
// function submitButton(event) {
//     props.add(note); 
//     event.preventDefault();
//     setNote({title:"", content: ""})
//   }

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
// Mistake in using the filter function - The condition index !== id ensures that only items with indices different from the one you want to delete are kept in the new array.
// Not a mistake but a desi tareeka using splice instead if filter - 
// let newNotes = [...notes];
// newNotes.splice(id,1); Start from the id thats given and delete no. of items that is 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// setNotes([...newNotes])
// BIGGEST MISTAKE - COULDN'T GET THE FILTER FUNCTION RIGHT FUK ME
// FILTER LOGIC -  // isse kya hoga ki new array me saare vo honge jiska index id me nhi h meaning jo delete nhi hone hai
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
