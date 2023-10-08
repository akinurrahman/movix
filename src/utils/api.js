import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a20fa27b2de91d2caa7afb4d44ec34e0";

const headers = {
  Authorization: API_KEY,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    // console.log(data)
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
