import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { getAllArticles, createArticle } from '../services/article';
import Articles from './Articles';
import CreateArticle from './CreateArticle';


export default class Main extends Component {
    state = {
        articles: [],
        comments: []
    }

    componentDidMount() {
        this.getArticles();
    }



    /* -------------------------------------------------------------------------- */
    /*                                  articles                                  */
    /* -------------------------------------------------------------------------- */

    getArticles = async () => {
        const articles = await getAllArticles();
        this.setState({ articles })
        // // this.setState({ articles: articles })
        // this.setState(async prevState => (
        //     prevState.articles = articles
        // ))
    }


    handleCreateArticle = async (userParams) => {
        const newArticle = await createArticle(userParams);
        this.setState(async prevState => ({
            articles: [...prevState.articles, newArticle]
        }))
        //! USING PREVSTATE SOMEHOW BREAKS CODE. NEED TO FIND A OUT WHERE THE ISSUE IS. 
        //! Only Await fixes it.but it still doesnt update real time.
    }

    /* -------------------------------------------------------------------------- */
    /*                                articles end                                */
    /* -------------------------------------------------------------------------- */


    render() {
        return (
            <div>
                <div>
                    {/* <Route path="/" exact>
                        <Home
                            key={this.props.data}
                            data={this.props.data}
                            users={this.props.user}
                        />
                    </Route> */}
                    <Route exact path="/user/LogIn" render={(props) => (
                        <LogIn
                            {...props}
                            handleLogInSubmit={this.props.handleLogInSubmit}
                        // key={this.props.user}
                        // user={this.props.user}
                        />
                    )} />
                    <Route exact path="/user/SignUp" render={(props) => (
                        <SignUp
                            {...props}
                            handleSignUpSubmit={this.props.handleSignUpSubmit}
                        // key={this.props.user}
                        // user={this.props.user}
                        />
                    )} />
                </div>
                <div>
                    <Route exact path='/' render={() => (
                        <Articles
                            articles={this.state.articles}
                            currentUser={this.props.currentUser}
                        />
                    )} />

                    <Route exact path='/articles/new' render={(props) => (
                        <CreateArticle
                            {...props}
                            handleCreateArticle={this.handleCreateArticle}
                        />
                    )} />


                </div>

            </div>
        )
    }
}
