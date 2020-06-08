import React, { useState } from 'react'

export default function AddNewPlayer(props) {
	const [newPlayerName, setNewPlayerName] = useState("")
	const handleChange = (event) => {
		setNewPlayerName(event.target.value)
	}
	const { addNewPlayer } = props
	return (
		<div>
			<input onChange={handleChange} />
			<button onClick={() => addNewPlayer(newPlayerName)}>Add Player</button>
		</div>
	)
}
