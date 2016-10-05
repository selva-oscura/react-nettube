const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
	<div className = 'app-container'>
    	<div className='home-info'>
			<h1 className='title'></h1>
			<button className='browse-all'></button>
    	</div>
	</div>
)

ReactDOM.render(<App />, document.getElementById('app'))
