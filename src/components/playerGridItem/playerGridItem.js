import React from 'react'
import './playerGridItem.scss'
export default function PlayerGridItem(props) {
	const { player, increaseScore, index } = props
	return (
		<div className='player-grid-item'>
			<span>{player.id}</span>
			<h3>{player.name}</h3>
			<span>Score: {player.score}</span>
			<button onClick={() => increaseScore(player)}>+</button>
		</div>
	)
}
