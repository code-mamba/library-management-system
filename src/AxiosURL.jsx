import axios from "axios";
const lmsUrl = axios.create({
	baseURL: process.env.REACT_APP_SECRET,
	
})
export default lmsUrl