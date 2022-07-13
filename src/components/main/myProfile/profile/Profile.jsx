import InformProfile from './InformProfile/InformProfile';
import PostAdd from './../post/addPost/PostAdd'
import Post from './../post/Post'

function Profile() {
  return (
    <div className="profile">
      <InformProfile />
      <PostAdd />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Profile;