import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "a50eed52famsh58404d5c9873b6dp1b8145jsnd7290d68e50f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
