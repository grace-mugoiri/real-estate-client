import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
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
		const { username, email, password } = this.state
		return (
			<div>
				<h1> Log In </h1>
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

          <button placeholder="submit" type="submit">
            Log In
          </button>

          <div>
            or <Link to='signup'>sign up</Link>
          </div>
				</form>
			</div>
		)
	}
}

export default Login;
