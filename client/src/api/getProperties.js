const baseURL = "http://localhost:5000/api/v1/properties";

const getProperties = {
    async getAllProperties() {
        const response = await fetch(baseURL);
        const jsonResponse = await response.json();
        const result = jsonResponse.data.properties;
        return result;
    }
}

export default getProperties;