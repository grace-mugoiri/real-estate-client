import React, { Component } from 'react';
import Signup from './registrations/Signup';
import Login from './registrations/Login';
import About from './About';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleAboutPage = this.handleAboutPage.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
	}
	handleAboutPage() {
		this.props.history.push('/about')
	}

  handleLogoutClick() {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <h2>
          Status:
          {this.props.loggedInStatus}
        </h2>

				<About handleAboutPage={this.handleAboutPage} />
				<br></br>
				<Signup handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<br></br>
				<Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<br></br>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>

      </div>
    );
  }
}
