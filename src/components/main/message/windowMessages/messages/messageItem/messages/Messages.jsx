import './Messages.css'
import MessagesIn from './in/MessagesIn';
import MessagesOut from './out/MessagesOut';


function Messages(props) {
  return (
    <div className='message__window'>
      <MessagesIn />
      <MessagesOut />
      <MessagesIn />
      <MessagesIn />
      <MessagesOut />
      <MessagesIn />
      <MessagesIn />
      <MessagesIn />
      <MessagesOut />
      <MessagesIn />
      <MessagesOut />
      <MessagesIn />
      <MessagesOut />
      <MessagesOut />
      <MessagesIn />
    </div>
  );
}

export default Messages;