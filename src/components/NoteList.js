import React from "react";
import NoteItem from "./NoteItem";

function NoteList( {filteredNoteCollection } ) {

  return (
    <ul>
      <NoteItem />
      {filteredNoteCollection.map(note => 
        <div key={note.id} onClick={() => console.log("clicked")}>
          <p style={{fontSize: "28px"}}>
            <strong>{note.title}</strong>
          </p>
          <p style=
          {{textOverflow: "ellipsis", 
            whiteSpace: "nowrap", 
            overflow: "hidden"}}>
            {note.body}
          </p>
          <hr></hr>
        </div>
      )}
    </ul>
  );
}

export default NoteList;
