import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import getProperties from '../../api/getProperties';
import { PropertiesContext } from '../../Context/PropertiesContext';
import './Details.css';
import Review from '../../Components/Review/Review';
import Rating from '../../Components/Rating/Rating';
import getReviews from '../../api/getReviews';
import InteractiveRating from '../../Components/InteractiveRating/InteractiveRating';

function Details() {
    const params = useParams();
    const id = Number(params.id);
    const {property, setProperty} = useContext(PropertiesContext)
    const {review, setReview} = useContext(PropertiesContext);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [revRating, setRevRating] = useState(0);
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const result =  await getProperties.getPropertyById(id);
                setProperty(result);
            } catch(err) {
                console.log(err.message);
            }
        }
        const fetchReview = async () => {
            try {
                const result = await getReviews.getReviewById(id);
                setReview(result);
            } catch(err) {
                setReview([]);   
            }
        }
        fetchProperty();
        fetchReview();
    }, [id, setProperty, setReview, addModal]);
    let numReviews, totalRating, avgRating;
    if (review) {
        numReviews = review.length;
        totalRating = 0;
        for (let i = 0; i < numReviews; i++) {
            totalRating += review[i].rating;
        }
        avgRating = numReviews !== 0 ? totalRating / numReviews : 0;
    }
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [rentCorp, setRentCorp] = useState("");
    const [url, setUrl] = useState("");
    const [updatePass, setUpdatePass] = useState("");
    const [deletePass, setDeletePass] = useState("");
    const [revName, setRevName] = useState("");
    const [revReview, setRevReview] = useState("");
    const toggleUpdateModal = () => {
        setUpdateModal(!updateModal);
    }
    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }
    const toggleAddModal = () => {
        setAddModal(!addModal);
    }
    const updateHandler = async (e) => {
        const newProperty = {
            name: name, 
            address: address,
            rent_corp: rentCorp,
            img_url: url,
            password: updatePass
        }
        await getProperties.updateProperty(id, newProperty);
        toggleUpdateModal();
    }
    const navigate = useNavigate();
    const deleteHandler = (e) => {
        const deleteParams = {
            id: id,
            password: deletePass
        };
        getProperties.deleteProperty(deleteParams);
        setTimeout(navigate('/properties'), 0.2);
    }
    const revRatingHandler = (val) => {
        setRevRating(val);
    }
    const addReviewHandler = (e) => {
        let newReview = {};
        if (revRating) {
            newReview = {
                name: revName,
                rating: revRating,
                review: revReview,
                property_id: property.id
            }
        } else {
            newReview = {
                name: revName,
                rating: revRating,
                property_id: property.id
            }
        }
        getReviews.addReview(newReview);
        toggleAddModal();
    }
    return (
        <div>
            <NavBar />
            {/* <div className="go-back">
                    <Link to="/properties" style={{color:'white'}}> &#60; Go  Back</Link>
            </div> */}
            {property &&
            <div className="details-section">
                <div className='image'>
                    <img src={property.img_url} alt="" />
                </div>
                <div className="property-details">
                    <h1 id="property-name">{property.name}</h1>
                    <h2 id="property-rent-corp">{property.rent_corp}</h2>
                    <h2 id="property-address">{property.address}</h2>
                    <div className="actions">
                        <button onClick={toggleUpdateModal} id="update-property">Update</button>
                        <button id="delete-property" onClick={toggleDeleteModal}>Delete</button>
                    </div>
                </div>
            </div>}
            {updateModal && 
            <div className="overlay" id="details-modal">
                <div id="update-modal">
                    <div className="top">
                        <h1>Update property</h1>
                        <button onClick={toggleUpdateModal}><img src="../closeButton.png" alt="" /></button>
                    </div>
                    <form>
                        <input required className="inp-field" type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Renting Corporation' value={rentCorp} onChange={(e) => setRentCorp(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Link to image of property' value={url} onChange={(e) => setUrl(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Password' value={updatePass} onChange={(e) => setUpdatePass(e.target.value)}></input>
                        <input type="submit" value="submit" style={{backgroundColor:'#006cff'}} onClick={updateHandler}></input>
                    </form>
                </div>
            </div>}
            {deleteModal &&
            <div className='overlay'>
                <div className="modal" id="delete-modal">
                    <div className="top">
                            <h1>Delete Property</h1>
                            <button onClick={toggleDeleteModal}><img src="../closeButton.png" alt="" /></button>
                    </div>
                    <form>
                        <p id="confirmation">Are you sure you wish to delete this property?</p>
                        <input required className="inp-field" type="text" placeholder='Password' value={deletePass} onChange={(e) => setDeletePass(e.target.value)}></input>
                        <input type="submit" value="Confirm" style={{backgroundColor: '#ff004e'}} onClick={deleteHandler}></input>
                    </form>
                </div>
            </div>
            }
            {addModal &&
            <div className="overlay">
                <div className="modal" id="add-review-modal">
                    <div className="top">
                            <h1>Add Review</h1>
                            <button onClick={toggleAddModal}><img src="../closeButton.png" alt="" /></button>
                    </div>
                    <form className='add-review-form'>
                        <p className='review-labels'>Name<span style={{color: 'red'}}>*</span></p>
                        <input required type='text' className='inp-field review-inp' placeholder='Your name'
                        value={revName} onChange={e => setRevName(e.target.value)}></input>
                        <p className='review-labels'>Rating<span style={{color: 'red'}}>*</span></p>
                        <InteractiveRating handler={revRatingHandler}/>
                        {/* <input required type='number' className='inp-field review-inp' placeholder='Your rating' min='1' max='5'
                        value={revRating} onChange={e => setRevRating(e.target.value)}></input> */}
                        <p className='review-labels'>Review</p>
                        <textarea className='inp-field' placeholder='Your Review!'
                        value={revReview} onChange={e => setRevReview(e.target.value)}></textarea>
                        <input type="submit" value="Submit Review" style={{backgroundColor: '#46e002'}}
                        onClick={addReviewHandler}></input>
                    </form>
                </div>
            </div>
            }
            {property && review &&
                <div className="review-section">
                    <div className="review-header">
                    <div className="divider"></div>
                        <h1>Resident Reviews</h1>
                        <div id="rating">
                            <div className="rating-container">
                                
                            <Rating rating={avgRating}/>
                            </div>
                            <h2>{Math.round((avgRating + Number.EPSILON) * 100) / 100} out of 5</h2>
                        </div>
                        <h2 id="numratings">{numReviews} total ratings</h2>
                        {/* <div className="divider"></div> */}
                    </div>
                    <div className="add-review">
                        <button onClick={toggleAddModal}>Add Review</button>
                    </div>
                    <div className="reviews-container">
                        {review && review.map(r => {
                            return <Review key={r.id} name={r.name} rating={r.rating} review={r.review} date={r.review_date}/>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Details
