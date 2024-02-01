
const SET_POST = 'SET_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER = 'SET_USER';

const setPostsAction = (payload) => ({ type: SET_POST, payload });
const deletePostAction = (payload) => ({ type: DELETE_POST, payload });
const setUserAction = (payload) => ({ type: SET_USER, payload });

export { SET_POST, DELETE_POST, SET_USER, setPostsAction, deletePostAction, setUserAction }