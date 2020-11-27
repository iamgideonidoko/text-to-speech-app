import React, { createContext, useState } from 'react';

let initialState = {
	textToRead: 'null is undefined',
	utter: new SpeechSynthesisUtterance()
	}

//create a context
export const GlobalContext = createContext();

//a provider
export const GlobalProvider = (props) => {

	const [appState, setAppState] = useState(initialState);



	return (<GlobalContext.Provider value={
		[appState, setAppState]
}>
		{ props.children }
	</GlobalContext.Provider>)
}