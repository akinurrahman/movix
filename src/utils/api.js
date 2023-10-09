import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `a20fa27b2de91d2caa7afb4d44ec34e0`;

export const fetchDataFromApi = async (endpoint) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}`
    );
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
