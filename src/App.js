import React, { Component } from 'react';
import './assets/App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/registrations/Signup';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/registrations/Login';

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
			  console.log('Worked', response)
	      if (response.data.logged_in ) {
			//   this.setState({
	        //   loggedInStatus: 'LOGGED_IN',
			//   });
			  console.log("logged in")

		  } else (
			  console.log("redirect")
			  )

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
				<Navbar />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				  <Route path="/about" component={About} />
				  {/* <Route path="/logout" component={About} /> */}



        {/* <Route
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
        /> */}
      </Switch>
  </div>
	  );
	}
}

export default App;
