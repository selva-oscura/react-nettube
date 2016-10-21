const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
import ShowCard from './ShowCard';
import data from '../public/data';

const Search = ({searchText, updateSearchText}) => {
	console.log('searchText', searchText)
	if(searchText.length>0){
		var shows = data.shows.filter((show) => {
			if(show.title.indexOf(searchText)>=0 || show.description.indexOf(searchText)>=0){
				return show;
			}
		});
	}else{
		shows = data.shows;
	}
	return (
	  <div className='app-container'>
	  	<div className='container'>
				<h2>Find a Show.....</h2>
				<input 
					type="text" 
					placeholder="title or description"
					defaultValue={searchText}
					onChange={(e) => {
						updateSearchText(e)
					}}
				/>
				{ searchText.length===0 ? null : <h2>Search results for {searchText}:</h2> }
		  	<div className='shows'>
		  		{shows.map((show) => ( 
		  			<ShowCard key={show.imdbID} show={show} />
		  		))}
		  	</div>
	  	</div>
	  </div>
	)
};

module.exports = Search;