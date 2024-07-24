import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ASSETS

// STYLE

function PgPost() {
  const { idPost } = useParams();
  const posts = useSelector((state) => state.post.value);
  return (
    <div className='container mx-auto px-4'>
      {
        posts.length > 0 &&
        <>
          <h2>Sono un Post: {idPost}</h2>
          <h3>title: {posts[idPost - 1].title}</h3>
          <p>Description: {posts[idPost - 1].body}</p>
        </>
      }
    </div>
  )
}

export default PgPost
