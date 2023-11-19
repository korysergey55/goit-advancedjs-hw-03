import axios from "axios";

const API_KEY = 'live_WBAXg2spdkwyhrllREaQ2aUDs97gq6IhSDZKEvd663sDi13vUZD45ddW3MHz3u6C';
const BASE_URL = 'https://api.thecatapi.com/v1';
const BREEDS_END_POINT = 'breeds';
const SEARCH_END_POINT = 'images/search';
axios.defaults.headers.common["x-api-key"] = API_KEY;

export const fetchBreeds = async () => {
  const responce = await axios.get(`${BASE_URL}/${BREEDS_END_POINT}`)
  if (!responce || responce.status !== 200) {
    throw new Error(responce.statusText)
  }
  return responce.data
}

export const fetchCatByBreed = async (breedId) => {
  const params = new URLSearchParams({
    breed_ids: breedId
  })
  const responce = await axios.get(`${BASE_URL}/${SEARCH_END_POINT}?${params}`)

  if (!responce || responce.status !== 200) {
    throw new Error(responce.statusText)
  }
  return responce.data
}