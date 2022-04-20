//helper file for setting up axios according to how we want it to work

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});