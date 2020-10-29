import React, { Component } from 'react';

class Dashboard extends Component {
// write a componentDidMount function
// function for current user like in navbar component
// if undefined, take user to login page
	componentDidMount() {
		currentUser ?
				(<Link to="" onClick={handleLogout}> Logout </Link>) :
				(<><NavLink to="/login" > Login </NavLink>
				<NavLink to="/signup" > Signup </NavLink></>)
	}

	render() {
		return (
			<div>
				<h2>Dashboard</h2>
				{/* <h2>Status: {this.props.isLoggedIn}</h2> */}
			</div>
		)
	}
}

export default Dashboard;


