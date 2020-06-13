import React, { Component } from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import "./Header.css"

export default class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="header">
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
                </div>
            </React.Fragment>
        );
    }
}

