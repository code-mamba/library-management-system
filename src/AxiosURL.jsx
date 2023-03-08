import axios from "axios";

const lmsUrl = axios.create({
  baseURL: process.env.REACT_APP_LMS_JSON_PORT,
});

export default lmsUrl;
