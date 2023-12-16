import React, { useState } from 'react'
import { useLazyGetPokemonByNameQuery } from '../services/pokemon'

function CatchPokemon() {
  const [search, setSearch] = useState("")
  const [pokemon, setPokemon] = useState(null)

  const [getPokemonByName, { error, isFetching }] = useLazyGetPokemonByNameQuery()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPokemon(null)

    // const { data } = await getPokemonByName(search.toLowerCase())
    const response = await getPokemonByName(search.toLowerCase())
    // console.log(response)

    if (response?.data) {
      setPokemon({ name: response.data.species.name, sprite: response.data.sprites.front_shiny })
    }

    setSearch("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Which Pokemon do you want to catch?</label>
        <br />

        <input
          type='text'
          placeholder='Pokemon Name...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type='submit'>Catch it</button>
      </form>

      <div>
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isFetching ? (
          <p>Loading...</p>
        ) : pokemon && (
          <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CatchPokemon