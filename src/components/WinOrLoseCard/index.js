import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {gameStatus, resetGame} = props
  const {isPlayerLost, score} = gameStatus
  const result = isPlayerLost ? 'You Lose' : 'You Won'
  const scoreValue = isPlayerLost ? 'Score' : 'Best Score'
  const imageUrl = isPlayerLost ? loseImage : wonImage

  const clickPlayAgain = () => {
    resetGame()
  }
  return (
    <div className="lost-container">
      <div className="lost-text-container">
        <h1 className="result">{result}</h1>
        <p className="score">{scoreValue}</p>
        <p className="value">{score}/12</p>
        <button className="button" type="button" onClick={clickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="img" className="image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
