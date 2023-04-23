import axios from "axios";
import ebay from 'ebay-sdk-nodejs';
const API_URL = "http://localhost:4000/api";
const api = axios.create({ withCredentials: true });
const ebayOptions = {
  clientID: 'AntonioC-webdev-SBX-199285e91-6460598a',
  clientSecret: 'SBX-99285e91c466-7050-4dc8-8a25-716e',
  countryCode: 'US',
  currencyCode: 'USD'
};
const ebayApi = ebayOptions.clientID ? new ebay(ebayOptions) : null;


export const signup = async (email, username, password, role) => {
  const response = await api.post(`${API_URL}/signup`, {
    email,
    username,
    password,
    role
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