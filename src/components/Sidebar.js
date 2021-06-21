import React from "react";
import NoteList from "./NoteList";

function Sidebar( { filteredNoteCollection } ) {

  const noteData = ({
    title: "Nice job clicking that!",
    body: "You're really very talented."
  })


  const postNote = () => {
    fetch(`http://localhost:3000/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteData)
    })
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList filteredNoteCollection={filteredNoteCollection}/>
      <button onClick={postNote}>New</button>
    </div>
  );
}

export default Sidebar;
