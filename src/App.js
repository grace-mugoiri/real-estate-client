import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'Not Logged In',
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

	loginStatus = () => {
	  axios.get('http://localhost:3001/logged_in',
	    { withCredentials: true })
	    .then((response) => {
	      if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
	        this.setState({
	          loggedInStatus: 'LOGGED_IN',
	        });
	      } else if (
	        !response.data.logged_in && (this.state.loggedInStatus === 'LOGGED_IN')
	      ) {
	        this.setState({
	          loggedInStatus: 'NOT_LOGGED_IN',
	          user: {},
	        });
	      }
	    })
	    .catch((error) => {
	      console.log('api errors:', error);
	    });
	}

	componentDidMount() {
	  this.loginStatus();
	}

	handleLogout = () => {
	  this.setState({
	    loggedInStatus: 'NOT_LOGGED_IN',
	    user: {},
	  });
	}

	handleLogin = (data) => {
	  this.setState({
	    loggedInStatus: 'Logged In',
	    user: data.user,
	  });
	}

	render() {
	  return (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />)}
        />
        <Route
          exact
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)}
        />
      </Switch>
    </BrowserRouter>
  </div>
	  );
	}
}

export default App;
