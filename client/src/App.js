import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import './App.css';


class App extends Component {
    state = {
        data: [],
        users: []
    }



    async componentDidMount() {
        console.log("componentdidmount");
        let data = await axios("http://localhost:3000/articles/");
        data = data.data
        this.setState({ data });
        console.log("Data:", this.state.data);


        console.log("componentDidMount2");
        let users = await axios("http://localhost:3000/users")
        users = users.data
        this.setState({ users })
        console.log("users:", this.state.users[0].username)
    }



    render() {
        //!  FIGURE OUT HOW TO SHOW USERS INSIDE THE MAP FUNCTION USING USER ID
        return (
            <div className="App">
                <Header />
                <Nav />
                <Route path="/" exact>
                    <Home
                        key={this.state.data}
                        data={this.state.data}
                        users={this.state.user}
                    />
                </Route>
                <Route exact path="/LogIn">
                    <LogIn
                        key={this.state.user}
                        user={this.state.user}
                    />
                </Route>
                <Route exact path="/SignUp">
                    <SignUp
                        key={this.state.user}
                        user={this.state.user}
                    />
                </Route>

            </div>
        )
    }
}

export default App;