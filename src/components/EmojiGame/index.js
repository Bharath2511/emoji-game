import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    indexOfEmojisClicked: [],
    scores: [],
    score: 0,
    topScore: 0,
    isPlayerLost: false,
    isPlayerWon: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  changeWonState = value => {
    this.setState({isPlayerWon: value})
  }

  changeLoseState = value => {
    this.setState({isPlayerLost: value})
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  updateTopScore = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  checkStatus = () => {
    const {indexOfEmojisClicked, scores, score} = this.state
    const {emojisList} = this.props
    if (indexOfEmojisClicked.length === emojisList.length) {
      this.changeWonState(true)
      const updatedScores = [...scores, score]
      const maxScore = Math.max(...updatedScores)
      this.updateTopScore(maxScore)
    }
  }

  updateClickedEmojis = async updatedEmojiList => {
    await this.setState({indexOfEmojisClicked: updatedEmojiList})
    await this.updateScore()
    this.checkStatus()
  }

  updateEmojiState = index => {
    const {indexOfEmojisClicked, scores, score} = this.state
    if (indexOfEmojisClicked.includes(index)) {
      this.changeLoseState(true)
      const updatedScores = [...scores, score]
      const maxScore = Math.max(...updatedScores)
      this.updateTopScore(maxScore)
    } else {
      const updatedEmojiList = [...indexOfEmojisClicked, index]
      this.updateClickedEmojis(updatedEmojiList)
    }
  }

  renderEmojis = () => {
    const EmojiList = this.shuffledEmojisList()
    const {isPlayerLost, isPlayerWon} = this.state
    if (isPlayerLost === true || isPlayerWon === true) {
      return null
    }
    return (
      <ul className="emoji-card-container">
        {EmojiList.map(emoji => {
          const {id} = emoji
          return (
            <EmojiCard
              key={id}
              updateEmojiState={this.updateEmojiState}
              emoji={emoji}
            />
          )
        })}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({indexOfEmojisClicked: []})
    this.setState({scores: []})
    this.setState({score: 0})
    this.setState({isPlayerLost: false})
    this.setState({isPlayerWon: false})
  }

  RenderWinOrLoseCard = () => {
    const {isPlayerWon, isPlayerLost} = this.state
    if (isPlayerWon || isPlayerLost) {
      return (
        <WinOrLoseCard gameStatus={this.state} resetGame={this.resetGame} />
      )
    }
    return null
  }

  render() {
    const {topScore} = this.state
    console.log(topScore)
    return (
      <div className="game-container">
        <NavBar scoreDetails={this.state} />
        {this.renderEmojis()}
        {this.RenderWinOrLoseCard()}
      </div>
    )
  }
}

export default EmojiGame
