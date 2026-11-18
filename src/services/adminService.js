import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getDashboardSummary = async () => {
    const token = localStorage.getItem("token");

    const response = await axios.get(
        `${API_URL}/Admin/dashboard-summary`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const getAllProducts = async () => {
    const token = localStorage.getItem("token");   

    const response = await axios.get(
        `${API_URL}/Products`,
        { 
            headers: {      
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
}