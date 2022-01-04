import React from 'react';
import Rating from '../Rating/Rating';
import './Review.css';

function Review(props) {
    let date = props.date;
    date = date.substr(0,10);
    return (
        <div className='review-card'>
            <h1>{props.name}</h1>
            <Rating rating={props.rating} />
            <p id="review-date">Reviewed on {date}</p>
            <p id="review-content">{props.review}</p>
        </div>
    )
}

export default Review
