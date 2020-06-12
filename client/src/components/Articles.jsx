import React from 'react'

export default function Articles(props) {
    const articles = props.articles;
    return (
        <div>
            <h3>Articles</h3>
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
                                    <p><span>(user_id: {parameter.user_id}) User:{parameter.user.username}: </span>{parameter.my_comment}</p>
                                    {/* <p>{x[parameter.user_id]}</p> */}
                                </>
                            )
                            )}
                        </div>
                    </>
                ))
            }
        </div>
    )
}
