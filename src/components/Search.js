import React from "react";

function Search( {searchNotes }) {

  const handleChange = (e) => {
    searchNotes(e.target.value)
  }

  return (
    <div className="filter">
      <input id="search-bar" 
             type="text" 
             placeholder="Search Notes" 
             onChange={(e) => handleChange(e)}
             />
    </div>
  );
}

export default Search;
