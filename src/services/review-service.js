import axios from "axios";
const API_URL = "http://localhost:4000/api/products";
const api = axios.create({ withCredentials: true });

export const postReview = async (userID, productID, review) => {
  const response = await api.post(
    `${API_URL}${productID}/reviews/${userID}`,
    review
  );
  return response.data;
};

export const findReviewsByProductID = async (productID) => {
  const response = await api.get(`${API_URL}/${productID}/reviews`);
  return response.data;
};

export const findReviewsByUserId = async (userId) => {
  const response = await api.get(
    `http://localhost:4000/api/users/${userId}/reviews`
  );
  return response.data;
};