import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const TextInputSpace = () => {

	const [inputText, setInputText] = useState('');
	const [isPaused, setIsPaused] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	let utterThis = new SpeechSynthesisUtterance();

	speechSynthesis.addEventListener('voiceschanged', () => { console.log(speechSynthesis.getVoices()) });

	utterThis.addEventListener('start', () => { 
		setIsStarted(true);
		setIsPaused(false);
	});

	utterThis.addEventListener('pause', () => { 
		setIsPaused(true);
		setIsStarted(false);
	});

	utterThis.addEventListener('resume', () => { 
		setIsStarted(true);
		setIsPaused(false);

	});

	
	utterThis.addEventListener('end', () => { 
		speechSynthesis.cancel();
		setIsStarted(false);
		setIsPaused(false);

	});

	utterThis.addEventListener('error', (e) => { 
	  console.log('An error has occurred with the speech synthesis: ' + e.error);
	});

	const handleInput = (e) => {
		setInputText(e.target.value);
	}

	const handleRead = () => {

		utterThis.text = inputText;

		speechSynthesis.speak(utterThis);

	}

	const handlePause = () => {
		speechSynthesis.pause();

	}

	const handleResume = () => {
		speechSynthesis.resume();
	}

	const handleReset = () => {
		speechSynthesis.cancel();
	}
 
	const handleControl = () => {

		if(!speechSynthesis.speaking) {
			handleRead();
			console.log('a start')
		} else if(!isPaused) {
			handlePause();
			console.log('a pause');
		} else {
			handleResume();
		}


	}


	return (
		<div className="text-input-space">

			<div>
				<textarea name="" id="" cols="30" rows="10" placeholder="Enter a text here" onInput={handleInput} >
			</textarea>
			</div>
			<div className="input-info">
			Line: {inputText.length}
			</div>
			<div className="">
				<button onClick={handleControl}>{isPaused ? 'Read' : isStarted ? 'Pause' : 'Read'}</button>
				<button onClick={handleReset}>Reset</button>
			</div>
			
		</div>
	)
}

export default TextInputSpace;