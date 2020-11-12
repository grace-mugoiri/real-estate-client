import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Contact from './components/Contact';
import './assets/styles/App.css';


class App extends Component {

	render() {
	  return (
			<div className="app">
				<Navbar />
			<Switch>

				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/about" component={About} />
				  <Route path="/dashboard" component={Dashboard} />
				  <Route path="/contact" component={Contact} />
				<Route path="/" component={Home} />
			</Switch>
			</div>
	  );
	}
}

export default App;
