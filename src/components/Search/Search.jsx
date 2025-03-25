import React from 'react'
import { MdSearch } from 'react-icons/md';
import "./Search.css"

const Search = () => {
  return (
   <div className="search">
           <div className="searchBox">
             <input type="text" className="searchInput" placeholder="Search" />
             <div className="searchIcon">
               <MdSearch className="icon" />
             </div>
           </div>
         </div>
  )
}

export default Search