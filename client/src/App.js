import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth"

import './App.css';
import Main from './components/Main';



class App extends Component {
    state = {
        // data: [],
        // users: [],
        currentUser: null,
    }

    async componentDidMount() {

        // console.log("componentdidmount");
        // let data = await axios("http://localhost:3000/articles/");
        // data = data.data
        // this.setState({ data });
        // console.log("Data:", this.state.data);


        // console.log("componentDidMount2");
        // let users = await axios("http://localhost:3000/users")
        // users = users.data
        // this.setState({ users })
        // console.log("users:", this.state.users[0].username)

        this.handleVerify();
    }




    /* -------------------------------------------------------------------------- */
    /*                                   signUp                                   */
    /* -------------------------------------------------------------------------- */

    handleSignUpSubmit = async (registerData) => {
        const currentUser = await registerUser(registerData);
        this.setState({ currentUser });
    }



    /* -------------------------------------------------------------------------- */
    /*                                    Login                                   */
    /* -------------------------------------------------------------------------- */



    handleLogInSubmit = async (loginData) => {
        const currentUser = await loginUser(loginData);
        this.setState({ currentUser })
    }

    handleLogOut = () => {
        this.setState({
            currentUser: null
        })
        localStorage.clear();
        removeToken();
        this.props.history.push("/")
    }


    /* -------------------------------------------------------------------------- */
    /*                                   verify                                   */
    /* -------------------------------------------------------------------------- */

    handleVerify = async () => {
        const currentUser = await verifyUser();
        this.setState({ currentUser });
        console.log(currentUser)
    }




    render() {
        //!  FIGURE OUT HOW TO SHOW USERS INSIDE THE MAP FUNCTION USING USER ID
        return (
            <div className="App">
                <Route path="/" render={(props) => (
                    <Header
                        {...props}
                        currentUser={this.state.currentUser}
                        handleLogOut={this.handleLogOut}
                    />
                )}
                />
                <Route to="/" exact>
                    <Main
                        key={this.state.data}
                        data={this.state.data}
                        users={this.state.user}
                        currentUser={this.state.currentUser}
                        handleLogInSubmit={this.handleLogInSubmit}
                        handleSignUpSubmit={this.handleSignUpSubmit}

                    />
                </Route>

            </div >
        )
    }
}

export default withRouter(App);