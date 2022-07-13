import './MessageItem.css'
import Messages from './messages/Messages';
import MessagesValue from './MessagesValue/MessagesValue'
import MessagesBtn from './MessagesBtn/MessagesBtn'


function MessageItem(props) {
  return (
    <div className='message__item'>
      <Messages />
      <MessagesValue />
      <MessagesBtn />
    </div>
  );
}

export default MessageItem;