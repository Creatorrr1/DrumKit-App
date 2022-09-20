import React from "react"
import { useRef } from "react"
import "./css/keyboard.css"

function Drums() {

    // it allows us to track data between renders without causing additional rerenders
    // const key = useRef()

    const keys = [
      { key: 65, src: "../sounds/clap.wav" },
      { key: 83, src: "../sounds/hihat.wav" },
      { key: 68, src: "../sounds/kick.wav" },
      { key: 70, src: "../sounds/openhat.wav" },
      { key: 71, src: "../sounds/boom.wav" },
      { key: 72, src: "../sounds/ride.wav" },
      { key: 74, src: "../sounds/snare.wav" },
      { key: 74, src: "../sounds/tom.wav" },
      { key: 76, src: "../sounds/tink.wav" },
    ]

    const audioElementsByKeyRef = useRef({})
    // This is the all the audio elements being created 
    // based on the data keys saved in the keys useRef
    // yourAudioKeysArray
    keys.map((audioKey) => (
        <audio
            ref={(el) => {
                audioElementsByKeyRef.current[audioKey] = el
            }}
            key={audioKey.key}
            src={audioKey.src}
        />
    ))

    // On the KeyDown event, the dataKey is targeted so we can access the audio src based on audioKey assigned to it
    const onKeyDown = (e) => {
        console.log('inside onKeyDown func')
        const { datakey } = e.target;
        const audioKey = datakey
        const audioEl = audioElementsByKeyRef.current[audioKey]
        audioEl.play()
    }

	return (
		<>
			<div className="wrapper">
				<main className="keys">
					<div datakey="65" className="key" onKeyDown={onKeyDown}>
						<kbd>A</kbd>
						<span className="sound">clap</span>
					</div>
					<div datakey="83" className="key" onKeyDown={onKeyDown}>
						<kbd>S</kbd>
						<span className="sound">hiat</span>
					</div>
					<div datakey="68" className="key" onKeyDown={onKeyDown}>
						<kbd>D</kbd>
						<span className="sound">kick</span>
					</div>
					<div datakey="70" className="key" onKeyDown={onKeyDown}>
						<kbd>F</kbd>
						<span className="sound">openhat</span>
					</div>
					<div datakey="71" className="key" onKeyDown={onKeyDown}>
						<kbd>G</kbd>
						<span className="sound">boom</span>
					</div>
					<div datakey="72" className="key" onKeyDown={onKeyDown}>
						<kbd>H</kbd>
						<span className="sound">ride</span>
					</div>
					<div datakey="74" className="key" onKeyDown={onKeyDown}>
						<kbd>J</kbd>
						<span className="sound">snare</span>
					</div>
					<div datakey="75" className="key" onKeyDown={onKeyDown}>
						<kbd>K</kbd>
						<span className="sound">tom</span>
					</div>
					<div datakey="76" className="key" onKeyDown={onKeyDown}>
						<kbd>L</kbd>
						<span className="sound">tink</span>
					</div>
				</main>
				{/* <audio data-key="65" src="../sounds/clap.wav"></audio>
				<audio data-key="83" src="../sounds/hihat.wav"></audio>
				<audio data-key="68" src="../sounds/kick.wav"></audio>
				<audio data-key="70" src="../sounds/openhat.wav"></audio>
				<audio data-key="71" src="../sounds/boom.wav"></audio>
				<audio data-key="72" src="../sounds/ride.wav"></audio>
				<audio data-key="74" src="../sounds/snare.wav"></audio>
				<audio data-key="75" src="../sounds/tom.wav"></audio>
				<audio data-key="76" src="../sounds/tink.wav"></audio> */}a
			</div>
		</>
	)
}

export default Drums