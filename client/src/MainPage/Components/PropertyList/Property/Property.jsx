import React from 'react'
import {useNavigate} from 'react-router-dom';

function Property(props) {
    let navigate = useNavigate()
    const displayDetails = e => {
        console.log("displayDetails called");
        const id = props.id;
        navigate(`/properties/${id}`);
    }
    return (
        <div className="property" onClick={displayDetails}>
            <div className="property-image">
                <img src={props.src} alt=""/>
            </div>
            <div className="property-details">
                <h2 id="name">{props.name}</h2>
                <h3 id="address">{props.address}</h3>
                <p id="rating">Rating</p>
                <p id="num-reviews">93 Reviews</p>
            </div>
        </div>
    )
}

export default Property

