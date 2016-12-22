import React from 'react';

const ShowCard = (props) => (
	<a href={`https://www.imdb.com/title/${props.show.imdbID}`} target="new">
		<div className='show-card' key={props.show.imdbID}>
			<img className='show-card-img' src={`./public/img/posters/${props.show.poster}`} />
			<div className='show-card-text' key={props.show.imdbID}>
				<h3 className='show-card-title'>{props.show.title}</h3>
				<h4 className='show-card-year'>{props.show.year}</h4>
				<p className='show-card-description'>{props.show.description}</p>
			</div>
		</div>
	</a>
);

module.exports = ShowCard;