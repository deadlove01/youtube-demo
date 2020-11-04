import axios from "axios";

const API_KEY = "AIzaSyCqt0swg2Vs6yOfAt4KmvHrfwwPVIR4NHs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY,
  },
});
