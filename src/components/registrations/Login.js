import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange = (event) => {
	  this.setState({
	    [event.target.name]: event.target.value,
	  });
	};

	handleSubmit = (event) => {
	  const { username, email, password } = this.state;

	  axios.post('http://localhost:3001/users',
	    {
	      user: {
	        username,
	        email,
	        password,
	      },
	    },
		 { withCredentials: true })
	    .then((response) => {
	      if (response.data.logged_in) {
	        this.props.handleSuccessfulAuth(response.data);
	      }
	    })
	    .catch((error) => {
	      console.log('api errors: error');
	    });
		  event.preventDefault();
	}

	render() {
		  const { username, email, password } = this.state;
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

    </form>
  </div>
		  );
	}
}

export default Login;
