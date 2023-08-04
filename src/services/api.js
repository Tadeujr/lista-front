import axios from "axios";

const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      let store = JSON.parse(localStorage.getItem("mylist@token")); //transformando o storage em json
      if (store) {
        config.headers["Authorization"] = `Bearer ${store}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default apiService();
