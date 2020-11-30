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
		<UtteranceSetting />
		<TextInputSpace />
		</div>
		</GlobalProvider>
	);

}

export default App;
