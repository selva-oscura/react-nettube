import React, { Component } from 'react';
import ShowCard from './ShowCard';
import data from '../public/data';

const Search = React.createClass({
	getInitialState(){
		return {
			searchText: "",
			searchTerms: [],
		}
	},
	updateSearchText(e){
		this.setState({ 
			searchText: e.target.value,
			searchTerms: e.target.value.toLowerCase().split(" "),
		});
	},
	render(){
		return (
		  <div className='app-container'>
		  	<div className='container'>
		  		<div className='search-container'>
						<h2>Find a Show.....</h2>
						<input 
							type="text" 
							placeholder="title or description"
							defaultValue={this.state.searchText}
							onChange={(e) => {
								this.updateSearchText(e)
							}}
						/>
						{ this.state.searchText.length===0 ? <h2>Showing all Shows</h2> : <h2>Search results for {this.state.searchText}:</h2> }
		  		</div>
			  	<div className='shows'>
			  		{data.shows.filter((show) => {
							if(this.state.searchTerms.every(term => (`${show.title} ${show.description}`.toLowerCase().indexOf(term)>=0))){
								return show;
							}
						}).sort(function(a,b){ 
							if(a.title < b.title){ return -1 }
							if(a.title>b.title){ return 1 }
							return 0;
						}).map((show) => ( 
			  			<ShowCard key={show.imdbID} show={show} />
			  		))}
			  	</div>
		  	</div>
		  </div>
		)
	}
});

module.exports = Search;
