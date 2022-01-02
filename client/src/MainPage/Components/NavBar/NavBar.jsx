import React from 'react'
import SearchBar from './SearchBar'

function NavBar() {
    return (
        <div>
        <nav>
            <img id="nav-logo" src="https://user-images.githubusercontent.com/43398149/147889780-9da97ef8-d4b6-423a-acc8-b976291f1ecd.png" alt="" />
            <SearchBar />
        </nav>
        </div>
    )
}

export default NavBar
