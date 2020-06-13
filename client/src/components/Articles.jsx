import React from 'react'
import { Link } from "react-router-dom"
import "./Articles.css"

export default function Articles(props) {

    const articles = props.articles;
    const currentUser = props.currentUser
    const handleDestoryArticle = props.handleDestoryArticle



    return (
        <div>
            <hr />
            <h3>Articles</h3>
            {currentUser &&
                <Link to="/new">
                    <button>Create New Article</button>
                </Link>
            }
            <div>
                {
                    articles.reverse().map((article) => (
                        <React.Fragment key={article.id}>
                            <>
                                <h3>
                                    Title: {article.title}, By <span>
                                        UserID: {article.user_id}, User: {article.user.username}
                                    </span>
                                </h3>
                                <p>Description: {article.description}</p>
                                <>
                                    {
                                        currentUser && currentUser.id === article.user_id && (
                                            <>
                                                <Link to={`/articles/${article.id}`}>
                                                    <button >Edit</button>
                                                </Link>
                                                <button
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
                            <div>
                                {article.comments.map(comment => (
                                    <>
                                        <p key={comment.user_id}><span> User {comment.user.username}: </span>{comment.my_comment}</p>
                                        {/* <p>{x[comment.user_id]}</p> */}
                                    </>
                                )
                                )}

                                <textarea type="text" placeholder="add a new comment" cols="60" rows="1" />
                            </div>
                            <hr />
                        </React.Fragment>
                    ))
                }
            </div>

        </div>
    )
}
