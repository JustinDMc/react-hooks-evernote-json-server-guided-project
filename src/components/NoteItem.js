import React from "react";

function NoteItem( { filteredNoteCollection } ) {

  return (
    <div>
    {filteredNoteCollection.map(note => 
      <li key={note.id} onClick={() => console.log("Figure me out!")}>
        <h2>{note.title}</h2>
        <p style= {{
          textOverflow: "ellipsis", 
          whiteSpace: "nowrap", 
          overflow: "hidden"}}>
          {note.body}
        </p>
      </li>
      )}
    </div>
  );
}

export default NoteItem;

// {filteredNoteCollection.map(note => 
//   <li key={note.id} onClick={() => console.log("Figure me out!")}>
//     <h2>{note.title}</h2>
//     <p style= {{
//        textOverflow: "ellipsis", 
//        whiteSpace: "nowrap", 
//        overflow: "hidden"}}>
//       {note.body}
//     </p>
//   </li>
//   )}
