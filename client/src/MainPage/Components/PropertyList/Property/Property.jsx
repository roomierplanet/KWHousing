import React from 'react'

function Property(props) {
    return (
        <div className="property">
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

