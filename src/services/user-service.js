import axios from "axios";
const API_URL = "http://localhost:4000/api";
const api = axios.create({ withCredentials: true });

export const getUserById = async (id) => {
    const response = await api.get(`${API_URL}/user/${id}`);
    return response.data;
};

export const getUserByEmail = async (email) => {
    const response = await api.get(`${API_URL}/users/${email}`);
    return response.data;
};


export const updateUser = async (id, username, email, password, role) => {
    const newUser = {
        _id : id,
        username: username,
        email: email,
        password: password,
        role: role
        };
    const response = await api.put(`${API_URL}/users/${id}`, newUser);
    return response.data;
    }
