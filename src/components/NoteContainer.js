import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [noteCollection, setNoteCollection] = useState([])
  const [filteredNoteCollection, setFilteredNoteCollection] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/notes`)
    .then(res => res.json())
    .then(noteData => {
      setNoteCollection(noteData)
      setFilteredNoteCollection(noteData)
    })
  }, [])

  const searchNotes = (searchTerm) => {
    return setFilteredNoteCollection(noteCollection.filter(note => note.title.includes(searchTerm)))
  }


  return (
    <>
      <Search searchNotes={searchNotes}/>
      <div className="container">
        <Sidebar filteredNoteCollection={filteredNoteCollection}/>
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
