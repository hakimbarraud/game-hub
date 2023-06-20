import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "109d8996bd6e4fe7b0f254b9d69db378",
  },
});
