import './CSS/clear.css'
import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

export default function StoredC() {
  const [cleared, setCleared] = useState(0)

  useEffect(() => {
    if (cleared === 1) {
      localStorage.clear()
      console.log("clear button pressed")
      setCleared(0)
    }

  }, [cleared]
  )

  const clearLS = () => {
    setCleared(1)
  }


  var pokeArr = []

  const displayStoredPokemon = () => {
    for (var i = 0; i < localStorage.length; i++) {
      var pokekey = localStorage.key(i)
      var pokemon = localStorage.getItem(pokekey)
      pokeArr.push(<Card key={i} pokemon={pokemon} />)
    }
    return pokeArr
  }

  return (
    
    <div>
      { localStorage.length > 0 &&
      <button onClick={clearLS}>
        Clear Results?
      </button>}
      <div id="cards">
        {displayStoredPokemon()}
      </div>
    </div>
  )
}
