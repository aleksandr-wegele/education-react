import avatarUser from '../../../../../img/avatar.jpg'
import './AvatarUser.css'

function AvatarUser() {
  return (
    <div className='avatar'>
      <img src={avatarUser} alt="avatar" className='avatar__user' />
    </div>

  );
}

export default AvatarUser;