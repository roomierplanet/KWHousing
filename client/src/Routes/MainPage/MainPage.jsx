import React from 'react'
import './MainPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import PropertyList from '../../Components/PropertyList/PropertyList';
import { useAuth0 } from "@auth0/auth0-react";
import AddProperty from '../../Components/AddProperty/AddProperty';

function MainPage() {
    const {user} = useAuth0();
    return (
        <div>
            <NavBar />
            {user && user.sub ==='google-oauth2|117396793460697106457' && <AddProperty />}
            <PropertyList />
        </div>
    )
}

export default MainPage;
