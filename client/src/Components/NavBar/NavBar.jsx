import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import { useAuth0 } from "@auth0/auth0-react";
import Login from '../Auth0/Login';
import Logout from '../Auth0/Logout';

function NavBar() {
    const {isLoading, isAuthenticated} = useAuth0();
    return (
        <nav>
            <a href=".."><img id="nav-logo" src="https://user-images.githubusercontent.com/43398149/147889780-9da97ef8-d4b6-423a-acc8-b976291f1ecd.png" alt="" /></a>
            <SearchBar />
            {!isLoading && isAuthenticated ? <Logout></Logout> : <Login></Login> }
        </nav>
    )
}

export default NavBar
