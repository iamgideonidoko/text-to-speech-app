import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Tests = () => {

	const context = useContext(GlobalContext);
	const [appState, setAppState]  = context;
	// console.log('ya', appState);

	console.log('Love of God');

	

	return (
		<div>
			
		</div>
	)
}

export default Tests;