import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // 'api/v1/jokes' -> 'http://localhost:3000/api/v1/jokes' (check vite.config.js file)
    axios.get('api/v1/jokes')
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error))
  }, [])


  return (
    <>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
