import './ContactsItem.css'
import contactsAvatarUser from './../../../../../../../img/message/avatar.jpg'


function ContactsItem(props) {
  return (
    <div className='contacts__item'>
      <a href="#" className='message__link'>
        <img src={contactsAvatarUser} alt="" className='contacts__item_user-avatar' />
        <span className='contacts__item_user-name'>UserName</span>
      </a>
    </div >
  );
}

export default ContactsItem;