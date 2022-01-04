import React from 'react'
import './MainPage.css';
import NavBar from './Components/NavBar/NavBar';
import PropertyList from './Components/PropertyList/PropertyList';
import AddProperty from './Components/AddProperty/AddProperty';

function MainPage() {
    return (
        <div>
            <NavBar />
            <AddProperty />
            <PropertyList />
        </div>
    )
}

export default MainPage;
