import React, { useEffect, useState } from 'react'
import './CSS/search.css';
import Pokedex from './Pokedex';

export default function Search() {
    const [searchedMon, setSearchedMon] = useState('')
    const [monToDex, setMonToDex] = useState({"pokemon":""})

    const handleChange = (e) => {
        e.preventDefault()
        setSearchedMon(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!localStorage.getItem(searchedMon)) {
            loadData(searchedMon)
        } else {
            setMonToDex(monToDex=>{JSON.parse(localStorage.getItem(searchedMon))})

            console.log(monToDex)
        }
    }

    // call api and fetch json
    const loadData = async (name) => {
        const poke = await getData(name)
        const sprite = poke.sprites.other['official-artwork'].front_default
        const type1 = poke.types[0].type.name
        var type2 = "none"
        if (poke.types.length == 2) {
            type2 = poke.types[1].type.name
        }
        const fturl = poke.species.url
        const height = poke.height
        const weight = poke.weight
        createPokeObject(sprite, type1, fturl, height, weight, type2)
    }

    
    const getData = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        const data = await response.json()
        return data
    }


    //create Pokemon Object for Pokedex and Cards
    const createPokeObject = async (img, poketype1, texturl, height, weight, poketype2) => {
        const text = await getFText(texturl)
        const ptype1 = getType(poketype1)
        const ptype2 = getType(poketype2)

        const storedPokemon = {
            name: searchedMon,
            image: img,
            type1: poketype1,
            ptype1: ptype1,
            type2: poketype2,
            ptype2: ptype2,
            text: text,
            height: height,
            weight: weight
        }


        /*


        use _.extend to replace object? for setting state of Mon to dex


        setMonToDex(monToDex=>{storedPokemon})
        addPokemon(searchedMon, storedPokemon)

        console.log(monToDex)
        

    }

    const addPokemon = (name, pokemonObject) => {
        const pokemonStr = JSON.stringify(pokemonObject)
        localStorage.setItem(name, pokemonStr)
    }


    const getFText = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.flavor_text_entries[0].flavor_text
    }


    const getType = (type) => {
        switch (type) {
            case 'normal':
                return 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg';
            case 'fighting':
                return 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg';
            case 'flying':
                return 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg';
            case 'poison':
                return 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg';
            case 'ground':
                return 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg';
            case 'rock':
                return 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg';
            case 'bug':
                return 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg';
            case 'ghost':
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg';
            case 'steel':
                return 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg';
            case 'fire':
                return 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg';
            case 'water':
                return 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg';
            case 'grass':
                return 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg';
            case 'electric':
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg';
            case 'psychic':
                return 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg';
            case 'ice':
                return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg';
            case 'dragon':
                return 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg';
            case 'dark':
                return 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg';
            case 'fairy':
                return 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg';
            case 'none':
                return '';
            default:
                return 'https://cdn2.bulbagarden.net/upload/3/3c/UnknownIC_Big.png';
        }
    }


    return (
        <div>
            <form id="pokeSearchForm" type="submit" onSubmit={handleSubmit}>
                <label for="search">Search</label>
                <input id="searchPokemon" type="search" pattern=".*\S.*" value={searchedMon} onChange={handleChange} required />
                <span class="caret"></span>
            </form>
            <Pokedex pokemon={monToDex} />
        </div>
    )
}
