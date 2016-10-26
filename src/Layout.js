import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component{	
	render(){
		return (
			<div className="wholeEnchilada">
				<header>
					<Link className="navLink" to="/">Home</Link>
					<Link className="navLink" to="/search">Search</Link>
				</header>
				<article>
					{this.props.children}
				</article>
			</div>
		)
	}
}

export default Layout;