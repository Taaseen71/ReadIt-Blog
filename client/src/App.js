import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { loginUser, registerUser } from "./services/auth"

import './App.css';
import Main from './components/Main';



class App extends Component {
    state = {
        data: [],
        users: [],
        currentUser: null,
    }


    handleLogInSubmit = async (loginData) => {
        const currentUser = await loginUser(loginData);
        this.setState({ currentUser })
    }

    handleSignUpSubmit = async (registerData) => {
        const currentUser = await registerUser(registerData);
        this.setState({ currentUser });
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
                <Route to="/" exact>
                    <Main
                        key={this.state.data}
                        data={this.state.data}
                        users={this.state.user}
                        handleLogInSubmit={this.handleLogInSubmit}
                        handleSignUpSubmit={this.handleSignUpSubmit}
                    />
                </Route>

            </div>
        )
    }
}

export default App;