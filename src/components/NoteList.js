import React from "react";
import NoteItem from "./NoteItem";

function NoteList( { filteredNoteCollection } ) {

  return (
    <ul>
      <NoteItem filteredNoteCollection={filteredNoteCollection}/>
    </ul>
  );
}

export default NoteList;