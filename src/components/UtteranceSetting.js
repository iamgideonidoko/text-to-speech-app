import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const UtteranceSetting = () => {
	const [voices, setVoices] = useState(speechSynthesis.getVoices());
	const [, setCurrentVoice, , setCurrentPitch, , setCurrentRate, , setCurrentVolume] = useContext(GlobalContext);

	window.addEventListener('load', () => {
		document.getElementById('pitch-slider').value = 1;
		document.getElementById('rate-slider').value = 1;
		document.getElementById('volume-slider').value = 1;
	})
	

	speechSynthesis.addEventListener('voiceschanged', () => { 
		let gottenVoices = speechSynthesis.getVoices();
		setVoices(gottenVoices);
		setCurrentVoice(gottenVoices[0]);
	});

	console.log('Voice Array', voices);

	const handleVoiceChange = (e) => {
		setCurrentVoice(voices.find(voice => voice.name === e.target.value));
	}

	const handlePitchChange = (e) => {
		setCurrentPitch(e.target.value);

	}

	const handleRateChange = (e) => {
		setCurrentRate(e.target.value);

	}

	const handleVolumeChange = (e) => {
		setCurrentVolume(e.target.value);
	}


	return (
		<div>
		<h2>Uterance Setting</h2>
		<div className="setting">
			<div className="speech-voice">
				<label htmlFor="select-voice">Change Voice</label>
				<select id="voice-select" onChange={handleVoiceChange} >
					{
						voices.map((voice, idx) => (
							<option key={idx} value={voice.name + ' - ' + voice.lang}>{voice.name}</option>
							))
					}
				</select>
			</div>
			<div className="speech-pitch">
				<label htmlFor="pitch-slider">Pitch</label>
				<input type="range" id="pitch-slider" step="0.1" min="0" max="2" onChange={handlePitchChange} />
			</div>
			<div className="speech-rate">
				<label htmlFor="rate-slider">Rate</label>
				<input type="range" id="rate-slider" step="0.1" min="0.1" max="10" onChange={handleRateChange} />
			</div>
			<div className="speech-volume">
				<label htmlFor="volume-slider">Volume</label>
				<input type="range" id="volume-slider"  step="0.1" min="0" max="1" onChange={handleVolumeChange}  />
			</div>
		</div>			
		</div>
	)
}

export default UtteranceSetting;
