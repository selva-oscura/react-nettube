const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
// const Router = ReactRouter.router;
// const Route = ReactRouter.route;
// const hashHistory = ReactRouter.hashHistory;
/* destructuring to get the components in one line rather than the three above */
const { Router, Route, hashHistory } = ReactRouter;

const Home = require('./Home');
const Search = require('./Search');

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/search' component={Search} />

  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
