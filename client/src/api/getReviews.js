const baseURL = '/api/v1/reviews';

const getReviews = {
    async getAllReviews() {
        const response = await fetch(baseURL);
        const jsonResponse = await response.json();
        const result = jsonResponse.data.reviews;
        return result;
    },
    async getReviewById(id) {
        const newURL = `${baseURL}/${id}`;
        const response = await fetch(newURL);
        const jsonResponse = await response.json();
        const result = jsonResponse.data.reviews;
        return result;
    },
    async addReview(review) {
        const body = {
            name: review.name, 
            rating: review.rating, 
            review: review.review,
            property_id: review.property_id
        };
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(body)
        });
        const jsonResponse = await response.json();
        const result = jsonResponse.status;
        return result;
    }
}

export default getReviews;

