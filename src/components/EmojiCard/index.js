import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = eachEmoji

  const onEmojiClick = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-btn" onClick={onEmojiClick} type="button">
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
