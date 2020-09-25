import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<NavLink to="/" > Home </NavLink>
			<NavLink to="/login" > Login </NavLink>
			<NavLink to="/signup" > Signup </NavLink>
			<NavLink to="/about" > About </NavLink>
		</div>
	);
}

export default Navbar;
