import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GamaBoard"
import Log from "./components/Log"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns( prevReturns => {

      const currentPlayer = deriveActivePlayer(prevReturns);

      const updatedTurns = [
        {square : {row : rowIndex, col : colIndex}, player :currentPlayer},
        ...prevReturns,
      ]
      return updatedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayer="player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialPlayer="player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
