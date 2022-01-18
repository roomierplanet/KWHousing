import React, { useState } from 'react'
import './InteractiveRating.css';

function InteractiveRating(props) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className='star-rating'>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                    className='rating-button'
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        setRating(index)
                        props.handler(index)
                    }
                    }
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}>
                        {index <= (hover || rating) ? 
                        <i key={index} className="fas fa-star"></i> :
                        <i key={index} className="far fa-star"></i>
                        }
                    </button>
                )
            })}
        </div>
    )
}

export default InteractiveRating
