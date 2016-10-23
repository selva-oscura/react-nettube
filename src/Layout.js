import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactRouter from 'react-router';
// const Router = ReactRouter.router;
// const Route = ReactRouter.route;
// const hashHistory = ReactRouter.hashHistory;
/* destructuring to get the components in one line rather than the multiple above */
import { Link, Router, Route, hashHistory } from 'react-router';

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