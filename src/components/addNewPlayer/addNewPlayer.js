import React, { useState } from 'react'

export default function AddNewPlayer(props) {
	const [newPlayerName, setNewPlayerName] = useState("")


	const handleChange = (event) => {
		console.log(event.target.value)
		setNewPlayerName(event.target.value)
		event.preventDefault();
	}

	const handleSubmit = (event) => {
		addNewPlayer(newPlayerName)
		event.preventDefault();
	}

	const { addNewPlayer } = props
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} />
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}
