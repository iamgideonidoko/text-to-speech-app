import React, { createContext, useState } from 'react';

//create a context
export const GlobalContext = createContext();


//a provider
export const GlobalProvider = (props) => {

	const [currentVoice, setCurrentVoice] = useState([]);
	const [currentPitch, setCurrentPitch] = useState(1);
	const [currentRate, setCurrentRate] = useState(1);
	const [currentVolume, setCurrentVolume] = useState(1);



	return (<GlobalContext.Provider value={
		[
			currentVoice,
			setCurrentVoice,
			currentPitch,
			setCurrentPitch,
			currentRate,
			setCurrentRate,
			currentVolume,
			setCurrentVolume
		]
}>
		{ props.children }
	</GlobalContext.Provider>)
}