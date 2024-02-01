import React from 'react'
import UserFilter from './components/UserFilter/UserFilter'
import Posts from './components/Posts/Posts'
import usePosts from './hooks/usePosts'
import PostsContext from './context/PostsContext'

function App() {
  const state = usePosts();

  return (
    <PostsContext.Provider value={{ ...state }}>
      <UserFilter />
      <Posts />
    </PostsContext.Provider>
  )
}

export default App
