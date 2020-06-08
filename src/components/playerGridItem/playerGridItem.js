import React from 'react'
import './playerGridItem.scss'
export default function PlayerGridItem(props) {
	const { player, increaseScore, index, winnerScore } = props
	return (
		<div className='player-grid-item'>
			<span>{player.id}</span>
			<h3>{player.name}</h3>
			<span>Score: {player.score}</span>
			<button onClick={() => increaseScore(player)}>+</button>
			<div className="player-grid-item-progress-bar" style={{
				width: (player.score / winnerScore) * 100 + '%'
			}} />
		</div>
	)
}
