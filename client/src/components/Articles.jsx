import React from 'react'
import { Link } from "react-router-dom"

export default function Articles(props) {



    const articles = props.articles;
    const currentUser = props.currentUser


    // console.log(props.currentUser)
    return (
        <div>
            <hr />
            <h3>Articles</h3>
            {currentUser &&
                <Link to="/articles/new">
                    <button>Create New Article</button>
                </Link>
            }
            <div>
                {
                    articles.map((article) => (
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
                                                <button>Edit</button>
                                                <button>Delete</button>
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
                            </div>
                            <hr />
                        </React.Fragment>
                    ))
                }
            </div>

        </div>
    )
}
