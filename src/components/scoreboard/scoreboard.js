import React, { useState } from 'react'
import PlayerGridItem from '../playerGridItem/playerGridItem'
import ControlBar from '../controlBar/controlBar'
import Header from '../header/header'
import AddNewPlayer from '../addNewPlayer/addNewPlayer'
const hardCodedUsers = [
	{
		name: "Miguel",
		score: 3
	},
	{
		name: "Juan",
		score: 1
	},
	{
		name: "Alicia",
		score: 6
	},
	{
		name: "Mari",
		score: 5
	},
]

export default function Scoreboard() {

	const [scoreBoard, setScoreBoard] = useState(hardCodedUsers)

	const increaseScore = (index) => {
		const newScoreboard = scoreBoard.map((player, playerIndex) => {
			// Duplicates the array, player by player
			if (playerIndex === index) {
				const updatedPlayer = { ...player }
				// spreads the object in order to duplicate (not reference original)
				updatedPlayer.score++
				return updatedPlayer
			}
			return player
		})

		setScoreBoard(newScoreboard)
	}

	const sortByScore = () => {
		// You can't sort state, first duplicate, then sort
		const newScoreboard = scoreBoard.map((player) => player).sort((playerA, playerB) => {
			if (playerA.score > playerB.score) {
				return -1
			}
			if (playerA.score === playerB.score) {
				return 0
			}
			return +1
		})

		setScoreBoard(newScoreboard)
	}

	const sortByLetter = () => {
		// You can't sort state, first duplicate, then sort
		const newScoreboard = [...scoreBoard].sort((playerA, playerB) => {
			if (playerA.name.toUpperCase() > playerB.name.toUpperCase()) {
				return 1
			}
			if (playerA.name.toUpperCase() === playerB.name.toUpperCase()) {
				return 0
			}
			return -1
		})

		setScoreBoard(newScoreboard)
	}

	const addNewPlayer = (newPlayerName) => {
		console.log('adding new player', newPlayerName)
		const newScoreboard = [...scoreBoard]
		newScoreboard.push({
			name: newPlayerName,
			score: 0
		})
		setScoreBoard(newScoreboard)


	}

	const restartScores = () => {
		const newScoreboard = scoreBoard.map((player) => {
			let restartedPlayer = { ...player }
			restartedPlayer.score = 0
			return restartedPlayer

		})
		setScoreBoard(newScoreboard)

	}
	const randomizeScores = () => {
		const newScoreboard = scoreBoard.map((player) => {
			let restartedPlayer = { ...player }
			restartedPlayer.score = Math.floor(Math.random() * 10)
			return restartedPlayer

		})
		setScoreBoard(newScoreboard)
	}

	const findTheWinner = () => {
		const newScoreboard = scoreBoard.map(player => player.score)
		const totalScore = newScoreboard.reduce((a, b) => Math.max(a, b))
		return totalScore
	}

	const winnerScore = findTheWinner()
	const winnerPlayers = scoreBoard.filter((player) => {
		if (player.score === winnerScore) {
			return player
		}
		return null
	})




	return (
		<div>

			<Header winnerPlayers={winnerPlayers} winnerScore={winnerScore} />
			<ControlBar
				sortByScore={sortByScore}
				sortByLetter={sortByLetter}
				restartScores={restartScores}
				randomizeScores={randomizeScores}
			/>
			{scoreBoard.map((player, index) =>
				<PlayerGridItem player={player} index={index} increaseScore={increaseScore} key={index} />
			)}
			<AddNewPlayer addNewPlayer={addNewPlayer} />



		</div>
	)
}
