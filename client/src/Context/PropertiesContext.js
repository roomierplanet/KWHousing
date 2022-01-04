import React, {useState, createContext} from 'react'

export const PropertiesContext = createContext();

export const PropertiesContextProvider = props => {
    const [properties, setProperties] = useState();
    const [property, setProperty] = useState();
    const [reviews, setReviews] = useState();
    const [review, setReview] = useState();
    return (
        <PropertiesContext.Provider value={{properties, setProperties, property, setProperty, reviews, setReviews, review, setReview}}>
            {props.children}
        </PropertiesContext.Provider>
    )
}
