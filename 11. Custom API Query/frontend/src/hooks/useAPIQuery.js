import { useState, useEffect } from "react"
import axios from 'axios'

const useAPIQuery = (urlPath, search) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /* This will not work because callback syntax of useEffect is predefined in React
  useEffect(async () => {
    const response = await axios.get('/api/products');
  }, [])
  */

  useEffect(() => {
    const controller = new AbortController() //to handle race condition

      ; (async () => {
        try {
          setLoading(true);
          setError(false);

          const response = await axios.get(urlPath + '?search=' + search, {
            signal: controller.signal
          });

          setProducts(response.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return;
          }

          setError(true);
        } finally {
          setLoading(false);
        }
      })()

    //cleanup
    return () => {
      controller.abort();
    }

  }, [search])

  return [products, error, loading]
}

export default useAPIQuery