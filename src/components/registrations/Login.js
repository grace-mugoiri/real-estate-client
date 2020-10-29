import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
		event.preventDefault();
		const { username, password } = this.state;


	  axios.post('http://localhost:3001/login',
	    {
	        username,
	        password,
	    },
		 { withCredentials: true })
			.then((response) => {
				if (response.data.logged_in) {
					const currentUser = {
						loggedIn: response.data.logged_in,
						email: response.data.user.email,
						username: this.state.username,
						password: this.state.password
					}

				 sessionStorage.setItem('current_user', JSON.stringify(currentUser))
				 this.props.history.push('/dashboard');

      } else {
        this.setState({
          errors: response.data.errors
        })
      }
	    })
	    .catch((error) => {
	      console.log(error.message);
	    });

	}

	render() {
		  const { username, password } = this.state;
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

export default withRouter(Login);
