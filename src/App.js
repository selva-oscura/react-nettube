import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactRouter from 'react-router';
// const Router = ReactRouter.router;
// const Route = ReactRouter.route;
// const hashHistory = ReactRouter.hashHistory;
/* destructuring to get the components in one line rather than the three above */
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Search from './Search';

class App extends Component{	
	constructor(props){
		super(props);
		this.state= { searchText: "" };
	}
	updateSearchText(e){
		this.setState({ searchText: e.target.value });
	}

	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
				  <IndexRoute component={Home} />
				  <Route path='/search' component={() => <Search searchText={this.state.searchText} updateSearchText={this.updateSearchText.bind(this)} />} 
				  />
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
