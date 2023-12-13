import { useEffect, useState } from 'react'
import './App.css'
import useAPIQuery from './hooks/useAPIQuery'

function App() {
  const [search, setSearch] = useState('');
  const [products, error, loading] = useAPIQuery('/api/products', search);

  /*
  if (error) {
    return <h3>Something went wrong!!!</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }
  */

  return (
    <>
      <h1>Chai aur API in React</h1>

      <input
        type='text'
        placeholder='Search here...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && (<h2>Something went wrong!!!</h2>)}
      {loading && (<h2>Loading...</h2>)}

      <h2>No. of Products: {products.length}</h2>

      {
        products.map((product) => (
          <div key={product.id}>
            {product.name} - Rs. {product.price}
          </div>
        ))
      }
    </>
  )
}

export default App
