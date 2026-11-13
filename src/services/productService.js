
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/Product`);
    return response.data;
};


export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/Product/${id}`);
    return response.data;
};


export const getHomeProducts = async () => {
  const products = await getProducts();

  return {
    featuredProducts: products.filter(
      (product) => product.isFeatured && product.isActive
    ),
    newProducts: products.filter(
      (product) => product.isNew && product.isActive
    ),
    inspiredProducts: products.filter(
      (product) => product.isInspired && product.isActive
    ),
  };
};