import React, {useEffect, useContext} from 'react';
import getProperties from '../../../api/getProperties';
import Property from './Property/Property';
import './PropertyList.css';
import { PropertiesContext } from '../../../Context/PropertiesContext';

function PropertyList() {
    const {properties, setProperties} = useContext(PropertiesContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProperties.getAllProperties();
                setProperties(response);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="properties-container">
            {properties? properties.map(property => {
                return <Property key={property.id} name={property.name} address={property.address} src={property.img_url} />
            }) : console.log("loading for now")}

        </div>
    )
}

export default PropertyList;
