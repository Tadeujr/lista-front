import axios from 'axios';


const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "https://lista-backend.herokuapp.com/api/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const store = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkY2ZhZjZjMS0xMDBjLTRiZTgtYjE5My03OGE0YzBmOTRlNTgiLCJlbWFpbCI6InRhZGV1X2p1bmlvckBvdXRsb29rLmNvbSIsImlhdCI6MTY3NzAyMjM1MCwiZXhwIjoxNjc3MTk1MTUwfQ.6uKmFB2lUZuHnG76Oq7DWX66784q_WjAFs3ZszufVAY";
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
