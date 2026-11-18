import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const registerCustomer  = async (userData) => {
  const response = await axios.post(`${API_URL}/Auth/register`, userData);
  return response.data;
};

export const loginCustomer  = async (loginData) => {
  const response = await axios.post(`${API_URL}/Auth/login`, loginData);
  return response.data;
};
