import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  renderScoreSection = () => {
    const {scoreDetails} = this.props
    const {isPlayerLost, isPlayerWon, score, topScore} = scoreDetails
    if (isPlayerLost === false && isPlayerWon === false) {
      return (
        <div className="score-container">
          <p className="score margin-score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="main-heading">Emoji Game</h1>
        </div>
        {this.renderScoreSection()}
      </div>
    )
  }
}

export default Navbar
