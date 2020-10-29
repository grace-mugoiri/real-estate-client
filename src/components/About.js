import React from "react";
import '../assets/About.css'
// import Logo from "../../src/"

const About = () => (
	<nav className="about">
		<div className="about--logo-holder">
			{/* <img src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80" alt="logo" className="about--logo" /> */}
			<h1>About page </h1>
		</div>
		<ul className="about--link">
				<li className="about--link-item">Home</li>
				<li className="about--link-item">About</li>
				<li className="about--link-item">Blog</li>
		</ul>
	</nav>
)

export default About;

