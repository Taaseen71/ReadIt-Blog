import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
// import { Route, Switch, Link } from 'react-router-dom';

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
        // let items = this.state.data.map(item =>
        //     <>
        //         <h5> <span>{item.id}.</span> {item.title}</h5>
        //         <p> {item.description}</p>
        //     </>
        // )


        return (
            <div className="App">
                <h1>Hello</h1>
                <div>{this.state.data.map(item =>
                    <>
                        <h5> <span>{item.id}.</span> {item.title}</h5>
                        {/* <h6> {this.state.users[0].username}</h6> */}

                        <p> {item.description}</p>
                        <h6>Commments:</h6>
                        <div>
                            {item.comments.map(parameter => {
                                return (
                                    <>
                                        <p>{parameter.my_comment}</p>
                                        <p>{parameter.user_id}</p>
                                        {/* <p>{x[parameter.user_id]}</p> */}
                                    </>
                                )
                            })}

                        </div>
                    </>
                )}</div>
                {/* this also works */}
                {/* <div>
                    {items}
                </div> */}
            </div>
        )
    }
}

export default App;