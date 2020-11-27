import React, { useState} from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TextInputSpace from './components/TextInputSpace';
import Tests from './components/Tests';
import './index.css';

const App = () => {
	//Main Ap component
	
	return (
		<GlobalProvider>
		<div className="container">
		<Header />
		<TextInputSpace />
		<Tests />

		</div>
		</GlobalProvider>
	);

}

export default App;
