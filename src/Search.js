const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
import data from '../public/data';
console.log('data', data);

const Search = () => (
  <div className='app-container search-image'>
    <div className='home-info'>
      <h1>Ye Olde Searche</h1>
      <Link to='/' className='browse-all'>Back to Home</Link>
      <pre>
      	<code>
      		{JSON.stringify(data, null, 4)}
      	</code>
      </pre>
    </div>
  </div>
);

module.exports = Search;