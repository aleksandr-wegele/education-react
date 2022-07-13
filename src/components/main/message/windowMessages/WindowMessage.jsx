import './WindowMessage.css'
import Dialog from './messages/messageItem/dialogs/Dialog'
import Contacts from './messages/messageItem/contaсts/Contacts';

function WindowMessage(props) {
  return (
    <div className="message">
      <Contacts />
      <Dialog />
    </div>
  );
}

export default WindowMessage;