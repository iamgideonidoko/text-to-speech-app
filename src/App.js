import React, { useState} from 'react';
import Header from './components/Header';
import Tests from './components/Tests';
import './index.css';

const App = () => {

	const [text, setText] = useState("null is undefined");
	const [utterThis, setUtterThis] = useState(null);

	let utter = new SpeechSynthesisUtterance()

	speechSynthesis.addEventListener('voiceschanged', () => { console.log(speechSynthesis.getVoices()) });

	utter.addEventListener('start', () => { console.log('started') });

	utter.addEventListener('end', () => { console.log('Ended') });



	const handleRead = () => {

		let synth = window.speechSynthesis;

		let voices = synth.getVoices();

		utter.text = text;

		synth.speak(utter);

		// console.log(utter);



	}

	const handleInput = (e) => {
		setText(e.target.value);
	}

	return (
		<div className="container">
		<Header />
		<Tests />
		<div className="wrapper">
		<textarea name="" id="" cols="30" rows="10" placeholder="Enter a text here" onInput={handleInput} >
		</textarea>
		<button className="readText" onClick={handleRead}>Read Text</button>

		</div>
		
		</div>
	);

}

export default App;
