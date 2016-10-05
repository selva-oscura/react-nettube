const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const App = () => (
	<div>
		<MyTitle title='Props are great' color='rebeccapurple' />
		<MyTitle title='Props are amazing' color='green' />
		<MyTitle title='Props are spiffy' color='black' />
	</div>	
)

ReactDOM.render(<App />, document.getElementById('app'))
