import React from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';

function Update() {
    const params = useParams();
    const propertyId = Number(params.id);
    console.log(propertyId);
    return (
        <div>
            <NavBar />
            Update
        </div>
    )
}

export default Update
