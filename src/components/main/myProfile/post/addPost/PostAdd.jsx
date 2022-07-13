import './PostAdd.css'

function PostAdd() {
  return (
    <div className="post__add">
      <h3 className='post__add-headding'>My Post</h3>
      <textarea className='post__add-value'></textarea><br></br>
      <button className='post__add-btn'>Add Post</button>
    </div>
  );
}

export default PostAdd;