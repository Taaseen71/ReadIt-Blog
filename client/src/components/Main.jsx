import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";


export default class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Route path="/" exact>
                        <Home
                            key={this.props.data}
                            data={this.props.data}
                            users={this.props.user}
                        />
                    </Route>
                    <Route exact path="/user/LogIn">
                        <LogIn
                            handleLogInSubmit={this.props.handleLogInSubmit}
                            key={this.props.user}
                            user={this.props.user}
                        />
                    </Route>
                    <Route exact path="/user/SignUp">
                        <SignUp
                            handleSignUpSubmit={this.props.handleSignUpSubmit}
                            key={this.props.user}
                            user={this.props.user}
                        />
                    </Route>

                </div>
            </div>
        )
    }
}
