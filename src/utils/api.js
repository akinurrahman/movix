import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = `a20fa27b2de91d2caa7afb4d44ec34e0`;

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      params: {
        api_key: API_KEY,
        ...params,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

