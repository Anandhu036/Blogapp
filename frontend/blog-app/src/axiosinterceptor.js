import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: '/api', // Set your base URL here
});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config)
    // Get the token from local storage or any other storage mechanism
    const token = localStorage.getItem('token');
    if (accesstoken) {
        // If the token exists, add it to the request headers
        config.headers.token=accesstoken;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
)
export default axiosInstance;