import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
function MenuItems() {
    return (
            <div className="header_menu">
                <div className="header_menuItems">
                    <ul>

                        <li>
                            <Link to='/home'>
                            Home
                            </Link>
                        </li>

                        <li>
                            <Link to='/discovery'>
                            Discovery
                            </Link>
                        </li>
                        <li>Top Music</li>
                        <li>Top Album</li>
                        <li>Stream</li>
                        <li>Playlist</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
    )
}

export default MenuItems
