import React from "react"
import { useRef } from "react"
import "./css/keyboard.css"

function Drums() {
	// basically the useRef it saves the data, but does not update in real time??
	// it allows us to track data between renders without causing additional rerenders
	// const key = useRef()

	const keys = useRef(["65", "83", "68", "70", "71", "72", "74", "75", "76"])

	const audioElementsByKeyRef = useRef({
		65: "../sounds/clap.wav",
		83: "../sounds/hihat.wav",
		68: "../sounds/kick.wav",
		70: "../sounds/openhat.wav",
		71: "../sounds/boom.wav",
		72: "../sounds/ride.wav",
		74: "../sounds/snare.wav",
		75: "../sounds/tom.wav",
		76: "../sounds/tink.wav",
	})
	// yourAudioKeysArray
	keys.map((audioKey) => (
		<audio
			ref={(el) => {
				audioElementsByKeyRef.current[audioKey] = el
			}}
			// {...}
		/>
	))

	const onKeyDown = (e) => {
		const audioKey = e.dataKey
		const audioEl = audioElementsByKeyRef.current[audioKey]
		audioEl.play()
	}

	return (
		<>
			<div className="wrapper">
				<main className="keys">
					<div dataKey="65" className="key" onKeyDown={onKeyDown}>
						<kbd>A</kbd>
						<span className="sound">clap</span>
					</div>
					<div dataKey="83" className="key" onKeyDown={onKeyDown}>
						<kbd>S</kbd>
						<span className="sound">hiat</span>
					</div>
					<div dataKey="68" className="key" onKeyDown={onKeyDown}>
						<kbd>D</kbd>
						<span className="sound">kick</span>
					</div>
					<div dataKey="70" className="key" onKeyDown={onKeyDown}>
						<kbd>F</kbd>
						<span className="sound">openhat</span>
					</div>
					<div dataKey="71" className="key" onKeyDown={onKeyDown}>
						<kbd>G</kbd>
						<span className="sound">boom</span>
					</div>
					<div dataKey="72" className="key" onKeyDown={onKeyDown}>
						<kbd>H</kbd>
						<span className="sound">ride</span>
					</div>
					<div dataKey="74" className="key" onKeyDown={onKeyDown}>
						<kbd>J</kbd>
						<span className="sound">snare</span>
					</div>
					<div dataKey="75" className="key" onKeyDown={onKeyDown}>
						<kbd>K</kbd>
						<span className="sound">tom</span>
					</div>
					<div dataKey="76" className="key" onKeyDown={onKeyDown}>
						<kbd>L</kbd>
						<span className="sound">tink</span>
					</div>
				</main>
				{/* <audio data-key="65" src="../sounds/clap.wav" ref={audioElementsByKeyRef}></audio>
			<audio data-key="83" src="../sounds/hihat.wav"></audio>
			<audio data-key="68" src="../sounds/kick.wav"></audio>
			<audio data-key="70" src="../sounds/openhat.wav"></audio>
			<audio data-key="71" src="../sounds/boom.wav"></audio>
			<audio data-key="72" src="../sounds/ride.wav"></audio>
			<audio data-key="74" src="../sounds/snare.wav"></audio>
			<audio data-key="75" src="../sounds/tom.wav"></audio>
			<audio data-key="76" src="../sounds/tink.wav"></audio> */}
			</div>
		</>
	)
}

export default Drums
