const baseURL = "http://localhost:5000/api/v1/properties";

const getProperties = {
    async getAllProperties() {
        const response = await fetch(baseURL);
        const jsonResponse = await response.json();
        const result = jsonResponse.data.properties;
        return result;
    },
    async getPropertyById(id) {
        const newURL = `${baseURL}/${id}`;
        const response = await fetch(newURL);
        const jsonResponse = await response.json();
        const result = jsonResponse.data.property;
        return result; 
    },
    async addProperty(property) {
        const {name, address, rent_corp, img_url} = property;
        const body = {
            name: name,
            address: address,
            rent_corp: rent_corp,
            img_url: img_url
        };
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    },
    async updateProperty(id, property) {
        const {name, address, rent_corp, img_url} = property;
        const body = {
            name,
            address,
            rent_corp,
            img_url
        };
        const newURL = `${baseURL}/${id}`;
        const response = await fetch(newURL, {
            method: 'PUT',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    },
    async deleteProperty(id) {
        const newURL = `${baseURL}/${id}`;
        const response = await fetch(newURL, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    }
}

export default getProperties;