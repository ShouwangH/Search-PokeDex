import React, { Component } from 'react'
import Favorites from '../components/Favorites';

export default class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: []
        }
    }

    getFavs = async() => {
        const res = await fetch('http://127.0.0.1:5000/poke/api')
        const data = await res.json();
        console.log(data)
        this.setState({
            pokemon: data
        })
    }

    loopThroughFavorites = (listOfFavs) => {
        return listOfFavs.map(fav => <Favorites pokemon = {fav} />)
    }

    componentDidMount() {
        this.getFavs()
    }

    render() {
        return (
            <div>
                <h2>Pokemon Favorites</h2>
                <div className='container'>
                    <div className='row'>
                        {this.loopThroughFavorites(this.state.pokemon)}
                    </div>
                </div>
            </div>
        )
    }
}
