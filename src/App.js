import React, { Component } from 'react';
import './assets/App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
	componentDidMount() {
	  this.loginStatus();
	}

	loginStatus = () => {
	  axios.get('http://localhost:3001/logged_in',
	    { withCredentials: true })
		  .then((response) => {
			  if (response.data.logged_in) {
				  this.handleLogin(response)

			  } else {
				  this.handleLogout()
			  }

	    })
	    .catch((error) => {
	    });
	}

handleLogin = (data) => {
	  this.setState({
	    isLoggedIn: true,
	    user: data.user
	  });
	}

handleLogout = () => {
	this.setState({
		isLoggedIn: false,
		user: {}
	});
}

	render() {
	  return (
			<div className="app">
				<Navbar />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				  <Route path="/about" component={About} />
      </Switch>
  </div>
	  );
	}
}

export default App;
