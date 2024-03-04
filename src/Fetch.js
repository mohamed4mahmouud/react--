import { useState } from "react";
import axios from "axios";

const useFetch = (apiUrl) => {
  let [url, setUrl] = useState(apiUrl);

  const getData = async () => {
    const res = await axios.get(url);
    return res.data;
  };

  return [url, getData];
};

export default useFetch;
