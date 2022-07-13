import './Post.css'
import ProfileInfoPost from './../post/post-profile-info/ProfileInfoPost'
import ContentPost from './content/ContentPost'
import ButtonPost from './button/ButtonPost'

function Post() {
  return (
    <div className="post__structure">
      <ProfileInfoPost />
      <ContentPost />
      <ButtonPost />
    </div>
  );
}

export default Post;