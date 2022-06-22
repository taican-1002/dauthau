import axios from "axios";
// const apiUrl = process.env.REACT_APP_API_KEY;
const apiUrl = "http://localhost:3001/";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.status === 404 || error.status === 403) {
      console.log("error");
    }
    return Promise.reject(error);
  }
);

export default {
  getHeaders() {
    let token = window.localStorage.getItem("token");
    if (token == null) {
      return {};
    }
    return { Authorization: "Bearer " + token };
  },
  get(url) {
    return axios.get(apiUrl + url, {
      headers: this.getHeaders(),
    });
  },
  post(url, data) {
    return axios.post(apiUrl + url, data, { headers: this.getHeaders() });
  },
  put(url, data) {
    return axios.put(apiUrl + url, data, { headers: this.getHeaders() });
  },
  delete(url) {
    return axios.delete(apiUrl + url, {
      headers: this.getHeaders(),
    });
  },
};
