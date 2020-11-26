import React, { createContext, useReducer } from 'react';

const initialState = {
	appState: [
		{textToRead: 'null is undefined'}
	]
}

//create a context
export const GlobalContext = createContext(initialState);

//a provider
export const GlobalProvider = (props) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (<GlobalContext.Provider value={
		{
			appState: state.appState
		}
}>
		{ props.children }
	</GlobalContext.Provider>)
}