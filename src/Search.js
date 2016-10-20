const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
import ShowCard from './ShowCard';
import data from '../public/data';
// console.log('data', data);

const Search = (state) => {
	return (
	  <div className='app-container'>
	  	<div className='container'>
				<h2>{state.searchText}</h2> 
		  	<div className='shows'>
		  		{data.shows.map((show) => ( 
		  			<ShowCard key={show.imdbID} show={show} />
		  		))}
		  	</div>
	  	</div>
	  </div>
	)
};

module.exports = Search;