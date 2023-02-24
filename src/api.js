import axios from 'axios';


const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "https://lista-backend.herokuapp.com/api/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => { //apenas para testar a Lista
      const store = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkY2ZhZjZjMS0xMDBjLTRiZTgtYjE5My03OGE0YzBmOTRlNTgiLCJlbWFpbCI6InRhZGV1X2p1bmlvckBvdXRsb29rLmNvbSIsImlhdCI6MTY3NzI0MzIxNSwiZXhwIjoxNjc3NDE2MDE1fQ._6tEObQ7yc9kc_43XaS6t3ouSqBCs34h2miGNIUPoco";
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
