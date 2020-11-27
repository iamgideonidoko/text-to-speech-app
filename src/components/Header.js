import React from 'react'

const Header = () => {

	window.addEventListener('load', () => {
		speechSynthesis.cancel();
	});
	
	return (
		<div>
			<h1 className="header-txt">Text to Speech</h1>	
		</div>
	)
}


export default Header;