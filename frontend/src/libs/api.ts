import axios from "axios";
import backendHost from "./backendHost";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

// Create a new Axios instance with default configuration
const api = axios.create({
  baseURL: backendHost, // Replace with your API base URL
  headers: {
    // Set common headers here
    "Content-Type": "application/json",
  },
});

// Add an interceptor to attach the authorization token to each request
api.interceptors.request.use(
  (config) => {
    // Get the token from wherever you have stored it (e.g., localStorage, state, etc.)
    const token = getToken();

    if (token) {
      // Set the authorization header with the token
      config.headers["Authorization"] = `Bearer ${token}`;
    } 
    else {
        // Handle the case when no token is found
        // For example, you can redirect the user to the login page or display an error message
        // Here, we are logging an error message to the console
        console.error('No token found. Please log in.');
        redirect("login");
        
      }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default api;

function getToken(): string | undefined {
  // Implement your logic to retrieve the token
  const token = Cookies.get("token");
  
  return token;
}
