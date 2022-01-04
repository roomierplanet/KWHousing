import React, { useContext, useState } from 'react'
import { PropertiesContext } from '../../../Context/PropertiesContext';
import './SearchBar.css';
import {Link} from 'react-router-dom';

function SearchBar() {
    const {properties} = useContext(PropertiesContext);
    const [displayResults, setDisplayResults] = useState(false);
    const displaySearch = () => setDisplayResults(true);
    const hideSearch = () => {
    setTimeout(setDisplayResults(false), 1);
    }
    const [filteredData, setFilteredData] = useState([]);
    const filterResults = e => {
        const val = e.target.value;
        const newFiltered = properties.filter((property) => {
            return property.name.toLowerCase().includes(val.toLowerCase())
            || property.address.toLowerCase().includes(val.toLowerCase());
        });
        setFilteredData(newFiltered);
    }
    return (
        <>
            <div className="SearchBar">
                <input onBlur={hideSearch} onFocus={displaySearch} onChange={filterResults} type="text" placeholder="Enter the place you wish to search for!" />
                {displayResults && properties && <div className="search-results">
                    <Link to={"/properties"}>
                    <div onMouseDown={e => e.preventDefault()} className="search-result">
                        <h1>All Properties</h1>
                        <p>Explore All Properties</p>
                    </div>
                    </Link>
                    {filteredData.map(property => {
                        return (<Link to={`/properties/${property.id}`}>
                        <div onMouseDown={e => e.preventDefault()} className="search-result">
                            <h1>{property.name}</h1>
                            <p>{property.address}</p>
                        </div>
                        </Link>)
                    })}
                </div>}
            </div>
        </>
    )
}

export default SearchBar
