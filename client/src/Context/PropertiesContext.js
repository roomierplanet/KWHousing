import React, {useState, createContext} from 'react'

export const PropertiesContext = createContext();

export const PropertiesContextProvider = props => {
    const [properties, setProperties] = useState();
    const [property, setProperty] = useState();
    return (
        <PropertiesContext.Provider value={{properties, setProperties, property, setProperty}}>
            {props.children}
        </PropertiesContext.Provider>
    )
}
