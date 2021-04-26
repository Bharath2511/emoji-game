import './index.css'

const EmojiCard = props => {
  const {updateEmojiState} = props
  const {emoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickEmoji = () => {
    updateEmojiState(id)
  }
  return (
    <li className="emoji-card">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emoji-image"
        onClick={onClickEmoji}
      />
    </li>
  )
}

export default EmojiCard
