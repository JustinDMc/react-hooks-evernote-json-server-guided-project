import React from "react";
import NoteList from "./NoteList";

function Sidebar( {filteredNoteCollection } ) {

  

  return (
    <div className="master-detail-element sidebar">
      <NoteList filteredNoteCollection={filteredNoteCollection}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
