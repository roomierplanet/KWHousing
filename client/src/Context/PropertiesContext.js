import React, {useState, createContext} from 'react'

export const PropertiesContext = createContext();

export const PropertiesContextProvider = props => {
    const [properties, setProperties] = useState();
    return (
        <PropertiesContext.Provider value={{properties, setProperties}}>
            {props.children}
        </PropertiesContext.Provider>
    )
}
