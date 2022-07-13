import './ButtonPost.css'

function ButtonPost() {
  return (
    <div className="post__btn">
      <button className='post__btn-like'></button>
      <button className='post__btn-dislike'></button>
    </div>
  );
}

export default ButtonPost;