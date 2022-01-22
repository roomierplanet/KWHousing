import React from 'react'
import {useNavigate} from 'react-router-dom';
import Rating from '../../Rating/Rating';

function Property(props) {
    let navigate = useNavigate()
    const displayDetails = e => {
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
                <div id="rating">
                <Rating rating={props.rating}/>
                </div>
                
                <p id="num-reviews">{props.numReviews} Reviews</p>
            </div>
        </div>
    )
}

export default Property

