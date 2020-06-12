import React, { Component } from 'react'

export default class Article extends Component {
    state = {
        title: "",
        description: "",
    }

    componentDidMount() {
        if (this.props.article) {
            this.setArticleForm();
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.article !== this.props.article) {
            this.setArticleForm();
        }
    }

    setArticleForm = () => {
        const { title } = this.props.article
        const { description } = this.props.article
        this.setState({
            title: title,
            description: description
        })
    }

    handleChange = (e) => {
        console.log("changed")
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }



    render() {
        // const { title } = this.state;
        // const { description } = this.state;
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleEditArticle(this.props.article.id, this.state);
                    this.props.history.push('/')
                    this.setState({
                        title: "",
                        description: ""
                    })
                    // window.location.reload(false);
                }}>
                    <hr />
                    <h3>Update Article</h3>
                    <label htmlFor="title"> Title: <br />
                        {/* <input id="id" type="text" value={title} onChange={this.handleChange} /> */}
                        <textarea
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            cols="60"
                            rows="3"
                        />
                    </label>
                    <br />
                    <label htmlFor="description"> Description: <br />
                        <textarea
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            cols="60"
                            rows="20"
                        />
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
