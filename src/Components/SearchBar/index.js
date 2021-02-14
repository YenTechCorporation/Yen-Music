import React from 'react'
import './style.css'
function SearchBar() {
    return (
        <div className="banner_search">
            <input type="text" className="search_bar" placeholder="Search artist, music, or album"/>
            <button class="upload_button" type="button">Upload music</button>
        </div>
        
    )
}

export default SearchBar
