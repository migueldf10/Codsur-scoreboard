import React from 'react'
import './playerGridItem.scss'
export default function PlayerGridItem(props) {
	const { player, increaseScore, winnerScore } = props
	return (
		<div className='player-grid-item'>
			<h3>{player.name}</h3>
			<span>Score: {player.score}</span>
			<button onClick={() => increaseScore(player)}>+</button>
			<div className="player-grid-item-progress-bar" style={{
				width: (player.score / winnerScore) * 100 + '%'
			}} />
		</div>
	)
}
