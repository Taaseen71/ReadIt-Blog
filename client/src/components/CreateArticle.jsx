import React, { Component } from 'react';



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
            <form
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
                <label htmlFor="title"> Title:<br />
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange} />
                </label>
                <div>
                    <label htmlFor="description"> Description:<br />
                        <textarea
                            id="description" cols="30" rows="10"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}>
                        </textarea>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
