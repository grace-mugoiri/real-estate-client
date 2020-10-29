import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
	const currentUser = sessionStorage.getItem('current_user')
	const handleLogout = () => {
		sessionStorage.removeItem('current_user');
		window.location.href = '/login';
	}
	return (
		<div className="navbar">
			{ currentUser ?
				(<Link to="" onClick={handleLogout}> Logout </Link>) :
				(<><NavLink to="/login" > Login </NavLink>
				<NavLink to="/signup" > Signup </NavLink></>)
			}
			<NavLink to="/about" > About </NavLink>
			{/* <NavLink to="/dashboard" > Dashboard </NavLink> */}

		</div>
	);
}

export default Navbar;
