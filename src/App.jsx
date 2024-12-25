import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayer="player 1" symbol="X"/>
          <Player initialPlayer="player 2" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
