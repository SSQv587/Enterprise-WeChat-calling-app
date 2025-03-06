import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '8.138.2.117' // 后端服务的地址
});

export default axiosInstance;