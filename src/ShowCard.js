import React from 'react';

const ShowCard = (props) => (
	<div className='show' key={props.show.imdbID}>
		<img className='show-card-img' src={`./public/img/posters/${props.show.poster}`} />
		<div className='show-card-text' key={props.show.imdbID}>
			<h3 className='show-card-title'>{props.show.title}</h3>
			<h4 className='show-card-year'>{props.show.year}</h4>
			<p className='show-card-description'>{props.show.description}</p>
		</div>
	</div>
);

module.exports = ShowCard;