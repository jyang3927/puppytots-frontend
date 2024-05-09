import axios from 'axios'; 

let MongoURL = process.env.REACT_APP_MONGO_URL || ""; 

const dbAxiosInstance = axios.create({baseURL:`${MongoURL}`}); 

export default dbAxiosInstance; 