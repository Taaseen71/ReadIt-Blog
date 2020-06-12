import React from 'react'
import { Link } from "react-router-dom"

export default function Articles(props) {
    const articles = props.articles;
    return (
        <div>
            <h3>Articles</h3>
            {props.currentUser &&
                <Link to="/articles/new">
                    <button>Create New Article</button>
                </Link>
            }
            <div>
                {
                    articles.map(article => (
                        <>
                            <h3 key={article.id}>
                                Title: {article.title}, By <span key={article.id}>
                                    UserID: {article.user_id}, User: {article.user.username}
                                </span>
                            </h3>

                            <p key={article.id}>Description: {article.description}</p>
                            <div>
                                {article.comments.map(parameter => (
                                    <>
                                        <p key={parameter.user_id}><span> User {parameter.user.username}: </span>{parameter.my_comment}</p>
                                        {/* <p>{x[parameter.user_id]}</p> */}
                                    </>
                                )
                                )}
                            </div>
                        </>
                    ))
                }
            </div>

        </div>
    )
}
