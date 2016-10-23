import React from 'react';
// import ReactRouter from 'react-router';
// const { Link } = ReactRouter;
import { Link } from 'react-router';
import ShowCard from './ShowCard';
import data from '../public/data';

const Search = ({searchText, updateSearchText}) => {
	var shows;
	if(searchText.length>0){
		shows = data.shows.filter((show) => {
			let searchTerms = searchText.toLowerCase().split(" ");
			let showInfo = show.title + " " + show.description;
			showInfo = showInfo.toLowerCase();
			if(searchTerms.every(term => (showInfo.indexOf(term)>=0))){
				return show;
			}
		});
	}else{
		shows = data.shows;
	}
	return (
	  <div className='app-container'>
	  	<div className='container'>
	  		<div className='search-container'>
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
	  		</div>
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