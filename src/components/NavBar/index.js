import './index.css'

const NavBar = props => {
  const {currentScore, bestScore, isGameOver} = props

  const gameOverStyle = isGameOver ? 'game-over-style' : ''

  return (
    <div className="nav-bg">
      <div className="nav-img-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-img"
          alt="emoji logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      <div className="nav-score-container">
        <div className={`score-top-score-container ${gameOverStyle}`}>
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {bestScore}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
