import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { getAllArticles, createArticle, destroyArticle, updateArticle } from '../services/article';
import Articles from './Articles';
import Article from './Article';
import CreateArticle from './CreateArticle';
import { createComment } from '../services/comment';


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


    handleCreateArticle = async (userInput) => {
        const newArticle = await createArticle(userInput);

        this.setState(prevState => ({
            articles: [...prevState.articles, newArticle]
        }))
        //! USING PREVSTATE SOMEHOW BREAKS CODE. NEED TO FIND A OUT WHERE THE ISSUE IS. 
        //! Only Await fixes it.but it still doesnt update real time.
    }

    handleDestoryArticle = async (id) => {
        await destroyArticle(id);
        this.setState(prevState => ({
            articles: prevState.articles.filter(article => article.id !== id)
        }))
    }

    //? EDIT ARTICLE. I HAVE NO IDEA WHAT I"M DOING HERE
    handleEditArticle = async (id, articleData) => {
        const updatedArticle = await updateArticle(id, articleData);
        this.setState(prevState => ({
            articles: prevState.articles.map(article => article.id === id ? updatedArticle : article)
        }))
    }
    /* -------------------------------------------------------------------------- */
    /*                                articles end                                */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                               Comments Start                               */
    /* -------------------------------------------------------------------------- */

    handleCreateComment = async (articleId, userInput) => {
        const newComment = await createComment(articleId, userInput);

        this.setState(prevState => ({
            articles: prevState.articles.map((art) => {
                if (art.id === newComment.article_id) {
                    art.comments.push(newComment);
                }
                return art;
            })
        }))
    }


    /* -------------------------------------------------------------------------- */
    /*                                Comments End                                */
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
                    <div >
                        <Route exact path='/' render={(props) => (
                            <Articles
                                {...props}
                                articles={this.state.articles}
                                currentUser={this.props.currentUser}
                                handleDestoryArticle={this.handleDestoryArticle}
                                handleCreateComment={this.handleCreateComment}
                            />
                        )} />
                    </div>
                    <div >
                        <Route exact path='/articles' render={(props) => (
                            <Articles
                                {...props} //? Trying to redirect logout to home
                                articles={this.state.articles.filter((art) => (
                                    art.user_id === this.props.currentUser.id
                                ))}
                                currentUser={this.props.currentUser}
                                handleDestoryArticle={this.handleDestoryArticle}
                                handleCreateComment={this.handleCreateComment}
                            />
                        )} />
                    </div>

                    <Route exact path='/new' render={(props) => (
                        <CreateArticle
                            {...props}
                            handleCreateArticle={this.handleCreateArticle}
                        />
                    )} />

                    {/* //??? NO IDEA WHATS GOING ON BELOW */}
                    {/* //!! WORK ON THIS> STILL NOT FIXED */}

                    <Route exact path={`/articles/:id`} render={(props) => {
                        const articleId = props.match.params.id;
                        const article = this.state.articles.find(article => article.id === parseInt(articleId));
                        return <Article
                            {...props}
                            article={article}
                            handleEditArticle={this.handleEditArticle}
                        />
                    }}
                    />



                </div>

            </div >
        )
    }
}
