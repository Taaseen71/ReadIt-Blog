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
                        <h1 className='heroTitle'>ReadIt, Where Expression is key</h1>
                    </div>
                    <>
                        <Route to="/" render={(props) => (
                            <Nav
                                {...props}
                                currentUser={this.props.currentUser}
                                handleLogOut={this.props.handleLogOut}
                            />
                        )
                        } />
                    </>
                </div>
            </React.Fragment>
        );
    }
}

