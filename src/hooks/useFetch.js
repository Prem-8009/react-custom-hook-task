import { useState, useEffect } from 'react';

// useFetch hook
const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {

    const abortCont = new AbortController();

    const fetchData = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await fetch(url, { signal: abortCont.signal });

        if (!response.ok) {
          throw Error('Could not fetch the data for that resource');
        }

        const json = await response.json();
        setData(json); 
        setLoading(false); 
      } catch (err) {
        if (err.name === 'AbortError') {
        console.log('Fetch aborted');
        } else {
          setError(err.message); 
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;