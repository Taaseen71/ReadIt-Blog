import React, { Component } from 'react';
import TextareaAutosize from "react-autosize-textarea";
import "./Articles.css";

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
            <div className="createArticleFormWrapper">
                <form className="createArticleForm" onSubmit={(e) => {
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
                    <label className="labelText" htmlFor="title"> Title: <br />
                        {/* <input id="id" type="text" value={title} onChange={this.handleChange} /> */}
                        <TextareaAutosize onResize={(e) => { }}
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            cols="60"
                            rows="3"
                        />
                    </label>
                    <br />
                    <label className="labelText" htmlFor="description"> Description: <br />
                        <TextareaAutosize onResize={(e) => { }}
                            id="description"
                            name="description"
                            className="createArticleTextArea"
                            value={this.state.description}
                            onChange={this.handleChange}
                            cols="60"
                            rows="20"
                        />
                    </label>
                    <br />
                    <button className="CreateArticleButton" >Submit</button>
                </form>
            </div>
        )
    }
}
