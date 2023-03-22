import { useState, useEffect } from "react";
/*
export async function getData(url) {
  const [test, setTest] = useState();

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  } finally {
    console.log("loading complete");
  }
}
*/
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, loading };
}
