import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com";


const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
});


export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch users.");
  }
};


export default api;
