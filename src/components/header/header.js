import React from 'react'

export default function Header(props) {
	const { winnerScore, winnerPlayers } = props
	if (winnerScore === 0) {
		return <h1>Start playing to have a winner</h1>
	}
	return (
		<div>
			<h1>
				{winnerPlayers.length > 1 ?
					`The winners are ${winnerPlayers.map(player => player.name).join(' & ')} with a score of ${winnerScore}`
					: `The winner is ${winnerPlayers[0].name} With a score of ${winnerScore}`}
			</h1>
		</div>
	)
}
