const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const Search = () => (
  <div className='app-container search-image'>
    <div className='home-info'>
      <h1>Ye Olde Searche</h1>
      <Link to='/' className='browse-all'>Back to Home</Link>
    </div>
  </div>
);

module.exports = Search;