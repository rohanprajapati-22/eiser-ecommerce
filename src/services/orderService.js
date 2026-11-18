import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Get JWT token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  console.log("JWT Token Available:", !!token);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createOrder = async (orderData) => {
  const response = await axios.post(
    `${API_URL}/Orders`,
    orderData,
    getAuthHeaders(),
  );

  return response.data;
};

// Get All Orders of Logged-in Customer
export const getOrders = async () => {
  const response = await axios.get(`${API_URL}/Orders`, getAuthHeaders());

  return response.data;
};

// Get Order By ID
export const getOrderById = async (id) => {
  const response = await axios.get(`${API_URL}/Orders/${id}`, getAuthHeaders());

  return response.data;
};
