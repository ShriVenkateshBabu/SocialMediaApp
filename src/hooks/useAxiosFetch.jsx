import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (dataurl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      let isMounted = true; // flag to track component mount status
      const source = axios.CancelToken.source(); // cancel token

      try {
        setIsLoading(true); 
        const response = await axios.get(url, {
          cancelToken: source.token, 
        });

        if (isMounted) {
          setData(response.data); 
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message); 
          setData([]);
        }
      } finally {
          isMounted && setTimeout(()=>{setIsLoading(false);},2000)
      }
      return () => {
        isMounted = false; 
        source.cancel();
      };
    };

    fetchData(dataurl); 
    
  }, [dataurl]);

  return { data, error, isLoading };
};

export default useAxiosFetch;
