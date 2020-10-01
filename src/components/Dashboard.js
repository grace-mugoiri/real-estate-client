import { React } from 'react';
import { Component } from 'react';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h2>Dashboard</h2>
				<h2>Status: {this.props.isLoggedIn}</h2>
			</div>
		)
	}
}

export default Dashboard;
