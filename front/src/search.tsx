import { useState, useEffect } from 'react'


function Search(prop: any) {

  return (
    <>
      <div className="search">
        <h3>Search</h3>
        <input 
          id="search-input" 
          type="text" 
          placeholder="Search text goes here" 
          className="search-input"
          onChange={ e => { 
            console.log("updated search input");
          }} />
      </div>
      
    </>
  )
}

export default Search
