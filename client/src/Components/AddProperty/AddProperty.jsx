import React, {useState} from 'react';
import './AddProperty.css';
import getProperties from '../../api/getProperties';
import getImages from '../../api/getImages';

function AddProperty() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [rentCorp, setRentCorp] = useState("");
    const [file, setFile] = useState();
    const uploadImage = async file => {
        const url = await getImages.upload(file);
        return url;
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        toggleModal();
        let url = await uploadImage(file);
        const newProperty = {
            name: name,
            address: address,
            rent_corp: rentCorp,
            img_url: url
        }
        await getProperties.addProperty(newProperty);
    }
    return (
        <div>
            <div className="add-property">
            <button onClick={toggleModal}>Add Property</button>
            </div>
            {modal && <div className="overlay">
                <div className="modal">
                    <div className="top">
                        <h1>Add a property</h1>
                        <button onClick={toggleModal}><img src="../closeButton.png" alt="" /></button>
                    </div>
                    
                    <h2 className='heading'>Property Details</h2>
                    <form>
                        <input required className="inp-field" type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        <input required className="inp-field" type="text" placeholder='Renting Corporation' value={rentCorp} onChange={(e) => setRentCorp(e.target.value)}></input>
                        <div className="upload-section">
                            <h2 className='heading'>Property Image</h2>
                            <input required type="file" placeholder="Image of Property" id='file-upload' onChange={e => setFile(e.target.files[0])}></input>
                        </div>
                        <input type="submit" value="submit" onClick={submitHandler}></input>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default AddProperty
