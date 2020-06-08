import React from 'react'
import './controlBar.scss'
export default function ControlBar(props) {
	const { sortByScore, sortByLetter, restartScores, randomizeScores } = props
	return (
		<div className="control-bar">
			<button onClick={randomizeScores}>Randomize Scores</button>
			<button onClick={restartScores}>Restart Scores</button>
			<button onClick={sortByScore}>Sort by score</button>
			<button onClick={sortByLetter}>Sort by letter</button>
		</div >
	)
}
