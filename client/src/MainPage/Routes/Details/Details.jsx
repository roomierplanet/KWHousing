import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import getProperties from '../../../api/getProperties';
import { PropertiesContext } from '../../../Context/PropertiesContext';
import './Details.css';

function Details() {
    const params = useParams();
    const id = Number(params.id);
    const {property, setProperty} = useContext(PropertiesContext)
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const result =  await getProperties.getPropertyById(id);
                setProperty(result);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchProperty();
    }, [id, setProperty]);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [rentCorp, setRentCorp] = useState("");
    const [url, setUrl] = useState("");
    const toggleUpdateModal = () => {
        setUpdateModal(!updateModal);
    }
    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }
    const updateHandler = async (e) => {
        const newProperty = {
            name: name, 
            address: address,
            rent_corp: rentCorp,
            img_url: url
        }
        await getProperties.updateProperty(id, newProperty);
        toggleUpdateModal();
    }
    const navigate = useNavigate();
    const deleteHandler = (e) => {
        getProperties.deleteProperty(id);
        setTimeout(navigate('/properties'), 60);
    }
    return (
        <div>
            <NavBar />
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
            <div className="overlay">
                <div className="modal">
                    <div className="top">
                        <h1>Update property</h1>
                        <button onClick={toggleUpdateModal}><img src="../closeButton.png" alt="" /></button>
                    </div>
                    <form>
                        <input required className="inp-field" type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Renting Corporation' value={rentCorp} onChange={(e) => setRentCorp(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Link to image of property' value={url} onChange={(e) => setUrl(e.target.value)}></input>
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
                        <input type="submit" value="Confirm" style={{backgroundColor: '#ff004e'}} onClick={deleteHandler}></input>
                    </form>
                </div>
            </div>
            }
        </div>
    )
}

export default Details
