const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

const Home = () => (
  <div className = 'app-container'>	
    <div className='home-info'>
      <h1 className='title'>Bash Videos</h1>
      <Link to='/search' className='browse-all'>Browse All</Link>
    </div>
  </div>
)

module.exports = Home