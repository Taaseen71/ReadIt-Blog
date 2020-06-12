import React, { Component } from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'


export default class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <h1>ReadIt, Where Expression is key</h1>
                </div>
                <>
                    <Route to="/" >
                        <Nav
                            currentUser={this.props.currentUser}
                            handleLogOut={this.props.handleLogOut}
                        />
                    </Route>
                </>
            </>
        );
    }
}

