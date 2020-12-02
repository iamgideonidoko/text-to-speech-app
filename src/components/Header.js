import React from 'react';
import NavBtn from './NavBtn';
import '../css/Header.css';



const Header = () => {

	window.addEventListener('load', () => {
		speechSynthesis.cancel();
	});
	
	return (
		<div className="header">
			<h1 className="header-txt"><span className="ht-first-part">Text to</span>  <span className="text" data-text="Speech">Speech</span></h1>
			<NavBtn />			
		</div>
	)
}


export default Header;