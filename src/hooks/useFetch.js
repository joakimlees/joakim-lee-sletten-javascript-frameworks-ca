import { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(url, setData, setLoading, setError);
  }, [url]);

  return { data, error, loading };
}
