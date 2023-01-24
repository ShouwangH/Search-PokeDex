import React from 'react'
import './CSS/card.scss'

export default function Card(pokemon) {

    const pokeInfo = JSON.parse(pokemon.info)

    return (
            <figure className={'card card--' + pokeInfo.type1}>
                <div className="card__image-container">
                    <img src={pokeInfo.image} alt={pokemon.pokemon} className="card__image" />
                </div>

                <figcaption className="card__caption">
                    <h1 className="card__name">{pokemon.pokemon}</h1>

                    <h3 className="card__type">
                        {pokeInfo.type1}
                    </h3>

                    <h4>
                        {pokeInfo.fText}
                    </h4>

                    <table className="card__stats">
                        <tbody>
                            {pokeInfo.type2 != "none" &&
                            <tr>
                                <th>Secondary Type</th>
                                <td>{pokeInfo.type2.toUpperCase()}</td>
                            </tr>
                            }
                            <tr>
                                <th>Height</th>
                                <td>{pokeInfo.height}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{pokeInfo.weight}</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </figcaption>
            </figure>
    )
}
