
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const createOrder = async (orderData) => {
  const response = await axios.post(
    `${API_URL}/Orders`,
    orderData
  );

  return response.data;
};
