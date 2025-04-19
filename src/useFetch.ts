import { useState, useEffect } from "react";

const useFetch = (url: string, headers = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    if (url) {
      fetch(url, { headers, signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }
    return () => abortCont.abort();
  }, [url, headers]);

  return { data, isPending, error };
};

export default useFetch;
