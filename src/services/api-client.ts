import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "109d8996bd6e4fe7b0f254b9d69db378",
  },
});
