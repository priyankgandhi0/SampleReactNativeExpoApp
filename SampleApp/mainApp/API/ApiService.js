import axios from "axios";

const baseURL = "https://dummyjson.com";
class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: baseURL,
      timeout: 40000,
      headers: {
        "Content-Type": "application/json",
        // You can set common headers here
      },
    });
  }

  // Example GET request
  async get(endpoint, params) {
    try {
      console.log("request API", endpoint);
      console.log("request data", params);
      const response = await this.api.get(endpoint, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      }
      if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
      throw error;
    }
  }
}

export default new ApiService();
