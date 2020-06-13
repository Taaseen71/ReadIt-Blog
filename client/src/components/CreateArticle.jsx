import React, { Component } from 'react';
import TextareaAutosize from "react-autosize-textarea";
import "./Articles.css";


export default class CreateArticle extends Component {
    state = {
        title: "",
        description: "",
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
            <div
                className="createArticleFormWrapper"
            >
                <form
                    className="createArticleForm"
                    onSubmit={(e) => {
                        // e.preventDefault();
                        this.props.handleCreateArticle(this.state);
                        this.props.history.push('/');
                        this.setState({
                            title: "",
                            description: ""
                        })
                        // window.location.reload(false);
                        //? need to refresh page because page not updating upon
                    }}
                >
                    <label className="labelText" htmlFor="title"> Title:<br />
                        <TextareaAutosize onResize={(e) => { }}
                            id="title"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </label>
                    <div>
                        <label className="labelText" htmlFor="description"> Description:<br />
                            <TextareaAutosize onResize={(e) => { }}
                                id="description" cols="60" rows="10"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <button className="CreateArticleButton">Submit</button>
                </form>
            </div>
        )
    }
}
