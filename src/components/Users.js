import React, { Component } from 'react'

export default class Users extends Component {
    render() {
            const user = this.props.user

        return (
                <div className="card col-2">
                        <div className="card-body">
                            <h5 className="card-title">{user.username}</h5>
                            <p className="card-text">{user.email}</p>
                        </div>
                </div>
        )
    }
}
