import React, { Component } from 'react'

export default class Favorites extends Component {
    render() {
        const f = this.props.pokemon
        return (
                <div className="card col-2">
                    <img src={f.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{f.name}</h5>
                            <p className="card-text">{f.species}</p>
                        </div>
                </div>
        )
    }
}
