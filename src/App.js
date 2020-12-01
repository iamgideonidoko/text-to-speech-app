import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TextInputSpace from './components/TextInputSpace';
import UtteranceSetting from './components/UtteranceSetting';
import './index.css';

const App = () => {
	//Main Ap component
	
	return (
		<GlobalProvider>
		<div className="container">
		<Header />
		<div className="wrapper">
			<UtteranceSetting />
			<TextInputSpace />
		</div>
		</div>
		</GlobalProvider>
	);

}

export default App;
