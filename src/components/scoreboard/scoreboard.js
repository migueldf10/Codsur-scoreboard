import React, { useState } from 'react'
import PlayerGridItem from '../playerGridItem/playerGridItem'
import ControlBar from '../controlBar/controlBar'
import Header from '../header/header'
import AddNewPlayer from '../addNewPlayer/addNewPlayer'
const hardCodedUsers = [
	{
		id: 1,
		name: "Miguel",
		score: 3
	},
	{
		id: 2,
		name: "Juan",
		score: 1
	},
	{
		id: 3,
		name: "Alicia",
		score: 6
	},
	{
		id: 4,
		name: "Mari",
		score: 5
	},
]

export default function Scoreboard() {

	const [scoreBoard, setScoreBoard] = useState(hardCodedUsers)
	const [sortByLetterActive, setSortByLetterActive] = useState(true)

	const increaseScore = (playerToChange) => {
		const newScoreboard = scoreBoard.map((player) => {
			// Duplicates the array, player by player
			if (player.id === playerToChange.id) {
				const updatedPlayer = { ...player }
				// spreads the object in order to duplicate (not reference original)
				updatedPlayer.score++
				return updatedPlayer
			}
			return player
		})

		setScoreBoard(newScoreboard)
	}

	const toggleSorting = () => {
		setSortByLetterActive(!sortByLetterActive)
	}

	const sortPlayers = (playerA, playerB) => {
		if (sortByLetterActive) {
			if (playerA.score > playerB.score) {
				return -1
			}
			if (playerA.score === playerB.score) {
				return 0
			}
			return 1
		}
		return playerA.name.localeCompare(playerB.name, 'en', { sensitivity: 'base' })
	}


	const addNewPlayer = (newPlayerName) => {
		const newScoreboard = [...scoreBoard]
		newScoreboard.push({
			id: scoreBoard.length + 1,
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
				restartScores={restartScores}
				randomizeScores={randomizeScores}
				sortByLetterActive={sortByLetterActive}
				toggleSorting={toggleSorting}

			/>
			{[...scoreBoard].sort(sortPlayers).map((player) =>
				<PlayerGridItem player={player} increaseScore={increaseScore} key={player.id} winnerScore={winnerScore} />
			)}
			<AddNewPlayer addNewPlayer={addNewPlayer} />
		</div>
	)
}
