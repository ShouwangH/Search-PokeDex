import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function StoredC() {

    var pokeArr = []

    const displayStoredPokemon = () => {
        for (var i=0; i < localStorage.length; i++) {
            var pokekey = localStorage.key(i)
            var pokemon = localStorage.getItem(pokekey)
            pokeArr.push(<Card key={i} pokemon={pokemon}/>) 
        }
        return pokeArr
        }

  return (
    <div id="cards">
        {displayStoredPokemon()}
    </div>
  )
}
