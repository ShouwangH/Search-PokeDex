import React, { Component } from 'react'
import Users from '../components/Users';

export default class Authapi extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    getFavs = async() => {
        const res = await fetch('http://127.0.0.1:5000/auth/api')
        const data = await res.json();
        console.log(data)
        this.setState({
            users: data
        })
    }

    loopThroughFavorites = (listOfUsers) => {
        return listOfUsers.map(user => <Users user = {user} />)
    }

    componentDidMount() {
        this.getFavs()
    }

    render() {
        return (
            <div>
                <h2>Users Info</h2>
                <div className='container'>
                    <div className='row'>
                        {this.loopThroughFavorites(this.state.users)}
                    </div>
                </div>
            </div>
        )
    }
}
