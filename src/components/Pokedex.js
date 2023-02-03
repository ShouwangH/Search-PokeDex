import React, { useEffect, useState } from 'react'
import './CSS/pokedex.css'

export default function Pokedex(props) {
    
    useEffect(()=>{
        if (props.pokemon.name) {
        pokeDisplay(props.pokemon)}
    })
    

    const pokeDisplay = (pokemon) => {
        document.getElementById('pokeimg').src = pokemon.image
        document.getElementById('type1').src = pokemon.ptype1
        document.getElementById('type2').src = pokemon.ptype2
        document.querySelector(".pokeindex-right__screen").innerHTML = pokemon.text
        document.getElementById('heightfield').innerHTML = `Ht: ${pokemon.height}`
        document.getElementById('weightfield').innerHTML = `Wt: ${pokemon.weight}`
    }

  
    return (
        <div className="pokeindex">
            <div className="pokeindex-left">
                <div className="pokeindex-left__top">
                    <div className="circle-big"></div>
                    <div className="circle-small"></div>
                </div>
                <div className="pokeindex-left__screen">
                    <div className="dots">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="screen">
                        <img id="pokeimg" />
                    </div>
                    <div className="status">
                        <div className="status-light"></div>
                        <div className="status-sound">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="pokeindex-left__buttons">
                    <div className="buttons">
                        <div className="buttons-circle"></div>
                        <div className="buttons-quad">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="controller">
                        <div className="controller-touch"></div>
                        <div className="controller-joystick"></div>
                    </div>
                </div>
            </div>
            <div className="pokeindex-middle"></div>
            <div className="pokeindex-right">
                <div className="pokeindex-right__screen"></div>
                <div className="pokeindex-right__buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="pokeindex-right__buttons-quadruple">
                    <div className="dot">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="button">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="pokeindex-right__buttons-triple">
                    <div className="button">
                        <span><img id="type1" /></span>
                        <span><img id="type2" /></span>
                    </div>
                    <div className="light"></div>
                </div>
                <div className="pokeindex-right__buttons-double">
                    <span id="heightfield"></span>
                    <span id="weightfield"></span>
                </div>
            </div>
        </div>
    )
}
