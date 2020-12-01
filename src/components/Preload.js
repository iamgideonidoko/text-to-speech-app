import React from 'react';
import '../css/Preload.css';

const Preload = () => {

	window.addEventListener('load', () => {
		document.querySelector('.preload').classList.add('has-loaded');
	});

	return (
		<div className="preload">
			<div className="dot-bricks"></div>
		</div>

		);


}

export default Preload;