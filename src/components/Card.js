import React from 'react'
import './CSS/card.scss'

export default function Card(props) {

    console.log(props)

    const pokemon = JSON.parse(props.pokemon)

    return (
            <figure className={'card card--' + pokemon.type1}>
                <div className="card__image-container">
                    <img src={pokemon.image} alt={pokemon.name} className="card__image" />
                </div>

                <figcaption className="card__caption">
                    <h1 className="card__name">{pokemon.name}</h1>

                    <h3 className="card__type">
                        {pokemon.type1}
                    </h3>

                    <h4>
                        {pokemon.text}
                    </h4>

                    <table className="card__stats">
                        <tbody>
                            {pokemon.type2 != "none" &&
                            <tr>
                                <th>Secondary Type</th>
                                <td>{pokemon.type2.toUpperCase()}</td>
                            </tr>
                            }
                            <tr>
                                <th>Height</th>
                                <td>{pokemon.height}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{pokemon.weight}</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </figcaption>
            </figure>
    )
}
