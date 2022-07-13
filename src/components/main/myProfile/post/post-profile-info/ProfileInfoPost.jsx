import AvatarPost from './../../../../img/post/avatar.jpg'
import './ProfileInfoPost.css'

function ProfileInfoPost() {
  return (
    <div className="post__header">
      <img src={AvatarPost} alt="User Avatar" className='post__avatar' />
      <strong className='post__user-description'>UserName</strong>
    </div>
  );
}

export default ProfileInfoPost;