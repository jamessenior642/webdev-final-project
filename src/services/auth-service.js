import axios from "axios";
const API_URL = "http://localhost:4000/api/auth";
const api = axios.create({ withCredentials: true });

export const signup = async (email, username, password) => {
  const response = await api.post(`${API_URL}/signup`, {
    email,
    username,
    password,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${API_URL}/profile`);
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${API_URL}/logout`);
  return response.data;
};