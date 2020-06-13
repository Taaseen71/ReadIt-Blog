import React from 'react'
import { Link } from "react-router-dom"
import "./Articles.css"
import TextareaAutosize from "react-autosize-textarea";

export default function Articles(props) {

    const articles = props.articles;
    const currentUser = props.currentUser
    const handleDestoryArticle = props.handleDestoryArticle

    const changetoCaps = () => {

        let CurrentUsername;
        if (props.currentUser) {
            CurrentUsername = props.currentUser.username.split('')
            CurrentUsername[0] = CurrentUsername[0].toUpperCase();
            CurrentUsername = CurrentUsername.join('')
        }
    }


    return (
        <div className="WholeArticlesWrapper">
            <div className="secondArticlesWrapper">
                <h2>Articles</h2>
                {currentUser &&
                    <Link to="/new">
                        <button className="CreateArticleButton" >Create New Article</button>
                    </Link>
                }
                <hr />
                <div>
                    {
                        articles.reverse().map((article) => (
                            <React.Fragment key={article.id}>
                                <>
                                    <h3 className="titleH3">
                                        {article.title}, By <span>
                                            {article.user.username}
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
                                                <p key={comment.user_id}><span className="commentsName">  {comment.user.username}: </span>{comment.my_comment}</p>
                                                {/* <p>{x[comment.user_id]}</p> */}
                                            </div>
                                        )
                                        )}

                                        <TextareaAutosize onResize={(e) => { }} className="commentTextArea" type="text" placeholder="add a new comment" cols="60" rows="1" />
                                    </div>
                                </div>
                                <hr />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
