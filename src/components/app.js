import { Router } from 'preact-router';
import Favorites from '../routes/favorites';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Header from './header';



const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Favorites path="/favorites" />
			{/* <Profile path="/profile/:user" /> */}
		</Router>
	</div>
)

export default App;
