import React from 'react'
import './playerGridItem.scss'
export default function PlayerGridItem(props) {
	const { player, increaseScore, index } = props
	return (
		<div className='player-grid-item'>
			<h3>{player.name}</h3>
			<span>Score: {player.score}</span>
			<button onClick={() => increaseScore(index)}>+</button>
		</div>
	)
}
