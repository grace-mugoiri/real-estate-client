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
      errors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange = (event) => {
	  // const { name, value } = event.target
	  this.setState({
	    [event.target.name]: event.target.value,
	  });
	};

	handleSubmit = (event) => {
	  const {
	    username, email, password, password_confirmation,
	  } = this.state;

	  axios.post('http://localhost:3001/users', {
	    user: {
	      username,
	      email,
	      password,
	      password_confirmation,

	    },
	  }, { withCredentials: true })
	    .then((response) => {
	      if (response.data.status === 'created') {
	        this.props.handleSuccessfulAuth(response.data);
	      }
	    })
	    .catch((error) => {
	      console.log('api errors:', error);
	    });
	  event.preventDefault();
	}

	render() {
	  const {
	    username, email, password, password_confirmation,
	  } = this.state;
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
        Register
      </button>
    </form>
  </div>
	  );
	}
}

export default Signup;
