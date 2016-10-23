import React from 'react';
// import ReactRouter from 'react-router';
// import { Link } from ReactRouter;
// Destructure directly to replace the 2 lines above
import { Link } from 'react-router';

const Home = () => (
  <div className='app-container home-image'>	
    <div className='home-info'>
      <h1 className='title'>Bash Videos</h1>
      <Link to='/search' className='browse-all'>Go to Search</Link>
    </div>
  </div>
)

module.exports = Home;