import React, { useContext } from 'react'
import PostsContext from '../../context/PostsContext';

export default function Posts() {

  const state = useContext(PostsContext);
  const handleDelete = (e) => state.deletePost(e);

  return (
    <ul> {state.filteredPosts.map((item) =>
      <li key={item.id} >
        {item.userName}
        {item.title}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    )}
    </ul>
  )
}
