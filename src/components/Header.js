import React from 'react';
import '../css/Header.css';


const Header = () => {

	window.addEventListener('load', () => {
		speechSynthesis.cancel();
	});
	
	return (
		<div className="header">
			<h1 className="header-txt">Text to <span className="text" data-text="Speech">Speech</span></h1>	
		</div>
	)
}


export default Header;