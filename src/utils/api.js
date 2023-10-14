import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmVkNTU3YzE2OTE0ZTdkYzA3NjM3OTE1YjVmYzEyZSIsInN1YiI6IjY1MmE2ZWNmZWE4NGM3MDBjYTEwNWU5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QK1jZaW4NzYoqaGmosuKJes4ShyWC71W18qscMLYMS4`;

const headers = {
  Authorization: "bearer " +  TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
