import axios from 'axios';


const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const store = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDM3OWExZC02NmJhLTQxNmQtYTdmNy0zM2Q3MzM5YTE5ODEiLCJlbWFpbCI6ImVkbGFpbmVfYnJhZ2FAaG90bWFpbC5jb20iLCJpYXQiOjE2ODk2MDYxNTIsImV4cCI6MTY4OTc3ODk1Mn0.Q-zx1NSpRhR4oVIiBojNgyCWExQxfMG6DxZ9DFrJy9Q";
      if (store) {
        
        config.headers["Authorization"] = ` Bearer ${store}`;
        // config.headers = { auth: token };
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default apiService();