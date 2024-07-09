import './index.css'

const WinOrLoseCard = props => {
  const {currentScore, onClickPlayAgain} = props

  const gameStatus = currentScore === 12 ? 'You Won' : 'You Lose'

  const scoreStatus = currentScore === 12 ? 'Best Score' : 'Score'

  const cardImage =
    currentScore === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgainBtn = () => {
    onClickPlayAgain()
  }
  return (
    <div className="win-lose-card">
      <div className="score-display-card">
        <h1 className="win-lose-heading">{gameStatus}</h1>
        <p className="win-lose-para">{scoreStatus}</p>
        <p className="win-lose-score">{currentScore}/12</p>
        <button
          className="win-lose-btn"
          onClick={onClickPlayAgainBtn}
          type="button"
        >
          Play Again
        </button>
      </div>
      <img src={cardImage} className="win-lose-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
