import { useReducer, useEffect } from 'react';
import service from '../service/posts'
import { setPostsAction, deletePostAction, setUserAction } from '../store/posts/actions';

import { INITIAL_STATE, reducer } from '../store/posts/reducer';

export default function usePosts() {

  const [state, dispatchState] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    (async () => {
      const responce = await service.get();
      dispatchState(setPostsAction(responce))
    })();
  }, []);

  const deletePost = async (id) => {
    await service.delete(id)
    try {
      dispatchState(deletePostAction(id))
    } catch (error) {
      error.log(error);
    }
  };

  const setActiveUser = (id) => dispatchState(setUserAction(id));

  const filteredPosts = state.selectedUser ? state.posts.filter((item) => item.id === state.selectedUser) : state.posts





  return ({ ...state, deletePost, setActiveUser, filteredPosts })
}


