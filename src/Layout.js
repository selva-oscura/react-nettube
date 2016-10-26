import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => (
	<div className = "wholeEnchilada">
		<header>
			<Link className="navLink" to="/">Home</Link>
			<Link className="navLink" to="/search">Search</Link>		
		</header>
		<article>
			{props.children}
		</article>
	</div>
)

module.exports = Layout;