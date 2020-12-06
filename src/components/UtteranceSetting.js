import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../css/UtteranceSetting.css';


const UtteranceSetting = () => {
	const [voices, setVoices] = useState(speechSynthesis.getVoices());
	const [currentVoice, setCurrentVoice, currentPitch, setCurrentPitch, currentRate, setCurrentRate, currentVolume, setCurrentVolume, isNavOpen] = useContext(GlobalContext);

	window.addEventListener('load', () => {
		document.getElementById('pitch-slider').value = 1;
		document.getElementById('rate-slider').value = 1;
		document.getElementById('volume-slider').value = 1;
	})
	

	speechSynthesis.addEventListener('voiceschanged', () => { 
		let gottenVoices = speechSynthesis.getVoices();
		setVoices(gottenVoices);
		// setCurrentVoice(gottenVoices[0]);
	});


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
		<div className={isNavOpen ? "utterance-setting mobile-active-utterance-setting" : "utterance-setting"} >
		<h3>Utterance Setting</h3>
		<div className="setting">
			<div className="speech-voice">
				<label htmlFor="select-voice">Change Voice</label>
				<select id="voice-select" onChange={handleVoiceChange} >
					{
						voices.map((voice, idx) => (
							<option key={idx} value={voice.name}>{voice.name + ' - ' + voice.lang}</option>
							))
					}
				</select>
			</div>
			<div className="speech-pitch">
				<label htmlFor="pitch-slider">Pitch ({currentPitch})</label>
				<input type="range" className="slider" id="pitch-slider" step="0.1" min="0" max="2" onChange={handlePitchChange} />
			</div>
			<div className="speech-rate">
				<label htmlFor="rate-slider">Rate ({currentRate})</label>
				<input type="range" className="slider" id="rate-slider" step="0.1" min="0.1" max="10" onChange={handleRateChange} />
			</div>
			<div className="speech-volume">
				<label htmlFor="volume-slider">Volume ({currentVolume})</label>
				<input type="range" className="slider" id="volume-slider"  step="0.1" min="0" max="1" onChange={handleVolumeChange}  />
			</div>
		</div>			
		</div>
	)
}

export default UtteranceSetting;
