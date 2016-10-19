const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
import data from '../public/data';
// console.log('data', data);

const Search = () => {
	return (
	  <div className='app-container'>
	  	<div className='container'>
		  	<div className='shows'>
		  		{data.shows.map((show) => ( 
						<div className='show' key={show.imdbID}>
							<img className='show-card-img' src={`./public/img/posters/${show.poster}`} />
							<div className='show-card-text' key={show.imdbID}>
								<h3 className='show-card-title'>{show.title}</h3>
								<h4 className='show-card-year'>{show.year}</h4>
								<p className='show-card-description'>{show.description}</p>
							</div>
						</div>

		  		))}
		  	</div>
	  	</div>
	  </div>
	)
};

module.exports = Search;