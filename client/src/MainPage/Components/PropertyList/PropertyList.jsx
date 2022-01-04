import React, {useEffect, useContext} from 'react';
import getProperties from '../../../api/getProperties';
import Property from './Property/Property';
import './PropertyList.css';
import { PropertiesContext } from '../../../Context/PropertiesContext';
import getReviews from '../../../api/getReviews';

function PropertyList() {
    const {properties, setProperties} = useContext(PropertiesContext);
    const {reviews, setReviews} = useContext(PropertiesContext);
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await getProperties.getAllProperties();
                setProperties(response);
            } catch(err) {
                console.log(err.message);
            }
        }
        const fetchReviews = async () => {
            try {
                const response = await getReviews.getAllReviews();
                setReviews(response);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchProperties();
        fetchReviews();
    }, [setProperties, setReviews]);
    return (
        <div className="properties-container">
            {properties && reviews ? properties.map(property => {
                let numReviews = 0;
                let totalRating = 0;
                for (let i = 0; i < reviews.length; i++) {
                    if (reviews[i].property_id === property.id) {
                        numReviews++;
                        totalRating += reviews[i].rating;
                    }
                }
                const avgRating = numReviews !== 0 ? totalRating / numReviews : 0;
                return <Property key={property.id} id={property.id} name={property.name} address={property.address} src={property.img_url} numReviews={numReviews} rating={avgRating}/>
            }) : console.log("loading for now")}

        </div>
    )
}

export default PropertyList;
