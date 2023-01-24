import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function StoredC() {

    var pokeArr = []

    const displayStoredPokemon = () => {
        for (var i=0; i < localStorage.length; i++) {
            var pokemon = localStorage.key(i)
            var info = localStorage.getItem(pokemon)
            pokeArr.push(<Card key={i} pokemon={pokemon} info={info}/>) 
        }
        return pokeArr
        }

  return (
    <div id="cards">
        {displayStoredPokemon()}
    </div>
  )
}
