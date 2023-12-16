import { useGetPokemonByNameQuery } from './services/pokemon'
import CatchPokemon from './components/CatchPokemon'
import './App.css'

function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery('bulbasaur')
  // console.log(data)

  return (
    <div className="App">
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <h3>{data.species.name} {isFetching ? '...' : ''}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}

      <CatchPokemon />
    </div>

  )
}

export default App
