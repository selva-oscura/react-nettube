const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Home = require('./Home');

const App = () => (
  <div className = 'app-container'>
  	<Home />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
