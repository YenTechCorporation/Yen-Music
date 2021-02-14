import React from 'react'
import './header.css'
import MenuItems from '../MenuItems'
import Banner from '../Banner'
import Buttons from '../Buttons'
import SearchBar from '../SearchBar'

function Header() {
    return (
        <div className="header_container">
             <Banner />
            <Buttons/>
            <SearchBar/>
            <MenuItems/>
        </div>
    )
}

export default Header
