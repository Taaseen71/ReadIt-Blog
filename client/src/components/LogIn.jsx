import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class LogIn extends Component {
    state = {
        username: "",
        password: ""
    }


    handleChange = (e) => {
        const { name, value } = e.target //? this will set e.target.name = name, and e.target.value = value
        //? so name will be set to username; so e.target.name = username, then username in state will be turned into the state.
        this.setState({
            [name]: value
        })
    }



    render() {
        // const { username, password } = this.state; //? this allows us to change this.state.username to just username. but keeping it as this.state.username/password for better understanding for now
        return (
            <div>
                <h1>
                    Welcome User: Log In
            </h1>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.handleLogInSubmit(this.state);
                        this.props.history.push('/');
                        //? Resetting State for this page only since everything is done
                        this.setState({
                            username: "",
                            password: ""
                        })
                    }}>
                        <label htmlFor="username"> Username:
                        <input
                                id="username"
                                type="text"
                                value={this.state.username}
                                name="username"
                                onChange={this.handleChange}
                                placeholder="username"
                            />
                        </label>
                        <br />
                        <label htmlFor="password"> Password:
                            <input
                                id="password"
                                type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                placeholder="password"
                            />
                        </label>
                        <br />
                        <button> Submit </button>
                    </form>
                    <div>
                        Don't Have an account?
                    <Link to="/user/SignUp"> Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;