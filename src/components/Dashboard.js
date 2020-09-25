// import React from 'react';

// const Dashboard = props => {
// 	return (
// 		<div>
// 			<h2>Dash</h2>
// 			<h2>Status: {props.loggedInStatus}</h2>
// 		</div>
// 	);
// }

// export default Dashboard;


import { React } from 'react';
import Dashboard from './Dashboard';
import { Component } from 'react';
import Dashboard from './Dashboard';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h2>Dash</h2>
				<h2>Status: {props.loggedInStatus}</h2>
			</div>
		)
	}
}

export default Dashboard;
