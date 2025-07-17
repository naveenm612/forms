import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";  //old url
// const API_BASE_URL = "https://forms-pq7e.vercel.app/"; //deploy server url


const api = {
  getEmploymentTypes: async () => {
    return await axios.get(`${API_BASE_URL}/employment-types`);
  },
  getGenders: async () => {
    return await axios.get(`${API_BASE_URL}/genders`);
  },
  getProfile: async () => {
    return await axios.get(`${API_BASE_URL}/profile`);
  },
  createProfile: async (profileData) => {
    return await axios.post(`${API_BASE_URL}/profile`, profileData);
  },
  updateProfile: async (id, profileData) => {
    return await axios.put(`${API_BASE_URL}/profile/${id}`, profileData);
  },
  login: async (user) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, user);
  },
  signup: async (user) => {
    return await axios.post(`${API_BASE_URL}/auth/signup`, user);
  },
};

export default api;
