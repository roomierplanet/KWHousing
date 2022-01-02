import React from 'react'
import SearchBar from './SearchBar'

function NavBar() {
    return (
        <div>
        <nav>
            <img id="nav-logo" src="../LogoKWH.png" alt="" />
            <SearchBar />
        </nav>
        </div>
    )
}

export default NavBar
