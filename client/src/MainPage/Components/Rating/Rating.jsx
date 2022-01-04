import React from 'react'
import './Rating.css';

function Rating({rating}) {
    let allStars = [];
    let fullStars = Math.floor(rating);
    let acc = 0;
    if (rating === 0) {
        for (let i = 0; i < 5; i++) {
            allStars.push(<i key={acc} className="far fa-star"></i>);
            acc++;
        }
    } else {
        for (let i = 0; i < fullStars; i++) {
            allStars.push(<i key={acc} className="fas fa-star"></i>);
            acc++;
        }
        let halfStars = 0;
        if (rating - fullStars !== 0) {
            halfStars = 1;
            allStars.push(<i key={acc} className="fas fa-star-half-alt"></i>);
            acc++;
        }
        for (let i = 0; i < 5 - fullStars - halfStars; i++) {
            allStars.push(<i key={acc} className="far fa-star"></i>);
            acc++;
        }
    }
    return (
        <div className='stars-container'>
            <span className='stars'>
                {allStars}
            </span>
        </ div>
    )
}

export default Rating
