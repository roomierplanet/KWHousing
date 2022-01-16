const baseURL = 'https://api.cloudinary.com/v1_1/arnavnagpal';

const getImages = {
    async upload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "sqww3ahl");
        console.log(formData);
        const newURL = `${baseURL}/image/upload`;
        const response = await fetch(newURL, {
            method: 'POST',
            body: formData
        });
        const jsonResponse = await response.json();
        return jsonResponse.url;
    }
}

export default getImages;
