import axios from 'axios';


const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const store = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkY2ZhZjZjMS0xMDBjLTRiZTgtYjE5My03OGE0YzBmOTRlNTgiLCJlbWFpbCI6InRhZGV1X2p1bmlvckBvdXRsb29rLmNvbSIsImlhdCI6MTY3Njc1ODcwMiwiZXhwIjoxNjc2OTMxNTAyfQ.RY-YtWUyGWM54doHqnunOsy1Mmd1_yaYmwfYL7RAGRE";
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
