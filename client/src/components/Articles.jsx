import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Articles.css"
import TextareaAutosize from "react-autosize-textarea";

// export default function Articles(props) {
export default class Articles extends Component {

    state = {
        newComment: "",
        articleId: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        this.setState({
            newComment: value,
            articleId: e.article.id
        })
    }


    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleCreateComment(this.state.articleId, this.state.newComment)
    }



    render() {
        const props = this.props
        const articles = props.articles;
        const currentUser = props.currentUser
        const handleDestoryArticle = props.handleDestoryArticle

        const changetoCaps = (CurrentUsername) => {
            CurrentUsername = CurrentUsername.split('')
            CurrentUsername[0] = CurrentUsername[0].toUpperCase();
            CurrentUsername = CurrentUsername.join('')
            return CurrentUsername;
        }



        return (
            <div className="WholeArticlesWrapper">
                <div className="secondArticlesWrapper">
                    <div className="articlesHeader">
                        <h2>Articles</h2>
                        {currentUser &&
                            <Link to="/new">
                                <button className="CreateArticleButton" >Create New Article</button>
                            </Link>
                        }
                    </div>
                    <hr />
                    <div>
                        {
                            articles.map((article) => (
                                <>
                                    <div key={article.id} className="eachArticle" >
                                        <>
                                            <h3 className="titleH3">
                                                {article.title}, by <span>
                                                    {changetoCaps(article.user.username)}
                                                </span>
                                            </h3>
                                            <div className="descriptionDiv">
                                                <p className="descriptionBox"> {article.description}</p>
                                            </div>
                                            <>
                                                {
                                                    currentUser && currentUser.id === article.user_id && (
                                                        <>
                                                            <Link to={`/articles/${article.id}`}>
                                                                <button className="articleButtons" >Edit</button>
                                                            </Link>
                                                            <button className="articleButtons"
                                                                onClick={() => {
                                                                    handleDestoryArticle(article.id);
                                                                    // window.location.reload(false);
                                                                }}>
                                                                Delete
                                                </button>
                                                        </>
                                                    )
                                                }
                                            </>
                                        </>
                                        <div className="commentsWrapper">
                                            <div className="commentsDiv">
                                                {article.comments.map(comment => (
                                                    <div >
                                                        <p key={comment.user_id}><span className="commentsName">  {changetoCaps(comment.user.username)}: </span>{comment.my_comment}</p>

                                                    </div>
                                                )
                                                )}
                                                {
                                                    currentUser &&
                                                    <>
                                                        <textarea onResize={(e) => { }} className="commentTextArea" type="text" placeholder="add a new comment" cols="60" rows="1" onChange={this.handleChange} />
                                                        <div className="commentButtonWrapper">
                                                            <button className="addCommentSubmit" onSubmit={this.handleOnSubmit}>submit</button>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}




