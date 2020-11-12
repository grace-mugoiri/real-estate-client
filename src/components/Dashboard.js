import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Dashboard = () => {
	const currentUser = sessionStorage.getItem('current_user')
	const handleLogout = () => {
		sessionStorage.removeItem('current_user');
		window.location.href = '/login';
	}
	return (
		<div className="dashboard">
			<h2>Dashboard</h2>
			{ currentUser ?
				(<Link to="" onClick={handleLogout}> Logout </Link>) :
				(<><NavLink to="/login" > Login </NavLink>
				<NavLink to="/signup" > Signup </NavLink></>)
			}
			<NavLink to="/about" > About </NavLink>
		</div>
	);
}

export default Dashboard;
