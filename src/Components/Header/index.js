import React from 'react'
import './header.css'
import logo from '../../Images/logo/logo.png'

function Header() {
    return (
        <div className="header_container">
            <div className="header_logo">
                    <img src={logo} alt=""/>
                    <p>YenMusic</p>
            </div>
            <div className="header_menu">
                <div className="header_menuItems">
                    <ul>
                        <li>Home</li>
                        <li>Discovery</li>
                        <li>Top Music</li>
                        <li>Top Album</li>
                        <li>Stream</li>
                        <li>Playlist</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="header_login">
                    <ul>
                        <li>Connexion</li>
                        <li>Language</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
