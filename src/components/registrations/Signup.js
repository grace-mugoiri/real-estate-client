import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			password_confirmation: '',
			errors: ''
		}
	}

	handleChange = (event) => {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	};

	handleSubmit = (event) => {
		event.prevetDefault()
	}
	render() {
		const { username, email, password, password_confirmation } = this.state
		return (
			<div>
				<h1> Sign Up </h1>
				<form onSubmit={this.handleSubmit}>
					<input
            type="text"
            value={username}
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
					<input
            type="text"
            value={email}
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />
					<input
            type="password"
            value={password}
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
					<input
            type="password"
            value={password_confirmation}
            placeholder="password_confirmation"
            name="password_confirmation"
            onChange={this.handleChange}
          />

          <button placeholder="submit" type="submit">
            Log In
          </button>


				</form>
			</div>
		)
	}
}

export default Signup;
