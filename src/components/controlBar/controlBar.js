import React from 'react'
import './controlBar.scss'
export default function ControlBar(props) {
	const { restartScores, randomizeScores, toggleSorting, sortByLetterActive } = props
	return (
		<div className="control-bar">
			<button onClick={randomizeScores}>Randomize Scores</button>
			<button onClick={restartScores}>Restart Scores</button>
			{sortByLetterActive ?
				<button onClick={toggleSorting}>Sorting by score, change</button>
				:
				<button onClick={toggleSorting}>Sorting alphabetically, change</button>
			}

		</div >
	)
}
