import React, { Component } from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'


class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <h1>ReadIt, Where Expression is key</h1>
                </div>
                <>
                    <Route to="/" >
                        <Nav currentUser={this.props.currentUser}
                        />
                    </Route>
                </>
            </>
        );
    }
}

export default Header;