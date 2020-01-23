import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';

class Form extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.username || !this.state.email || !this.state.password) {
            alert(`Fill out your details please!`);
        } else if (this.state.password.length < 6) {
            alert(
                `Choose a more secure password`
            );
        } else {
            alert(`Hello ${this.state.username}!`);
        };

        this.setState({
            username: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div>
                <p>
                    Hello {this.state.username}
                </p>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={this.state.password}
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
