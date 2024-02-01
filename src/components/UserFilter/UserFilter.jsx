import React, { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
PostsContext

export default function UserFilter() {
  const state = useContext(PostsContext)

  return (
    <select onChange={(e) => state.setActiveUser(e.target.value)} >
      <option value={''}>All</option>
      {state.posts.map((item) => <option key={item.id} value={item.id}>
        {item.userName}
      </option>)}
    </select>
  )
}
