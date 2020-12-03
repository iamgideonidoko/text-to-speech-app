import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TextInputSpace from './components/TextInputSpace';
import UtteranceSetting from './components/UtteranceSetting';
import Preload from './components/Preload';
import Redirection from './components/Redirection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import './css/MediaQueries.css';

const App = () => {
	//Main Ap component
	
	return (
		<Router>
		<GlobalProvider>
		<Route exact path="/">
		<Preload />
		<div className="container">
		<Header />
		<div className="wrapper">
			<UtteranceSetting />
			<TextInputSpace />
		</div>
		</div>
		</Route>
		<Route>
			<Redirection />
		</Route>
		</GlobalProvider>
		</Router>
	);

}

export default App;
