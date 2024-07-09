/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

<ul className="emoji-list">
            {shuffledEmojiList.map(eachEmoji => (
              <EmojiCard eachEmoji={eachEmoji} key={eachEmoji.id} />
            ))}
  </ul>

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    newEmojiList: [],
    isNewGame: true,
    currentScore: 0,
    bestScore: 0,
    isGameOver: false,
  }

  initializeEmojiList = () => {
    const {emojisList} = this.props

    this.setState({
      newEmojiList: emojisList.map(eachEmojiObj => ({
        ...eachEmojiObj,
        isClicked: false,
      })),
      isNewGame: false,
    })
  }

  shuffledEmojisList = emojiArr => emojiArr.sort(() => Math.random() - 0.5)

  onClickEmoji = id => {
    const {newEmojiList, bestScore, currentScore} = this.state
    const clickedEmoji = newEmojiList.find(emojiObj => emojiObj.id === id)
    if (clickedEmoji.isClicked === false) {
      if (bestScore < currentScore + 1) {
        this.setState(prevState => ({
          newEmojiList: prevState.newEmojiList.map(eachEmoji => {
            if (eachEmoji.id === id) {
              return {...eachEmoji, isClicked: true}
            }
            return eachEmoji
          }),
          currentScore: prevState.currentScore + 1,
          bestScore: prevState.bestScore + 1,
        }))
      } else {
        this.setState(prevState => ({
          newEmojiList: prevState.newEmojiList.map(eachEmoji => {
            if (eachEmoji.id === id) {
              return {...eachEmoji, isClicked: true}
            }
            return eachEmoji
          }),
          currentScore: prevState.currentScore + 1,
        }))
      }
    } else {
      this.setState({
        isGameOver: true,
      })
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameOver: false,
      currentScore: 0,
      isNewGame: true,
    })
  }

  render() {
    const {isGameOver, newEmojiList, isNewGame, currentScore} = this.state
    const {bestScore} = this.state

    if (isNewGame) {
      this.initializeEmojiList()
    }

    const shuffledEmojiList = this.shuffledEmojisList(newEmojiList)

    return (
      <div className="bg-container">
        <NavBar
          currentScore={currentScore}
          bestScore={bestScore}
          isGameOver={isGameOver}
        />
        <div className="emoji-container">
          {isGameOver || currentScore === 12 ? (
            <WinOrLoseCard
              currentScore={currentScore}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            <ul className="emoji-list">
              {shuffledEmojiList.map(eachEmoji => (
                <EmojiCard
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
