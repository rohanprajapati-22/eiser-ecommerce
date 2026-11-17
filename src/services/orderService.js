
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const createOrder = async (orderData) => {
  const response = await axios.post(
    `${API_URL}/Orders`,
    orderData
  );

  return response.data;
};

export const getOrders = async () => {
    const response = await axios.get(`${API_URL}/Orders`);
    return response.data;
};

// Get order by ID
export const getOrderById = async (id) => {
    const response = await axios.get(`${API_URL}/Orders/${id}`);
    return response.data;
};