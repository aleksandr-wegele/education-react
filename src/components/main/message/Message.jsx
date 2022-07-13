import './Message.css'
import WindowMessage from './windowMessages/WindowMessage'

function Message(props) {
  return (
    <div className="message">
      <WindowMessage />
    </div>
  );
}

export default Message;