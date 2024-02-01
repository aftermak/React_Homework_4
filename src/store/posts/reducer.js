import { SET_POST, DELETE_POST, SET_USER } from './actions'

const INITIAL_STATE = {
    posts: [],
    selectedUser: '',
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_POST:
            return { ...state, posts: payload };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((item) => item.id !== payload), selectedUser: '' };
        case SET_USER:
            console.log(payload);
            return { ...state, selectedUser: payload };

        default:
            return state;
    }
}

export { INITIAL_STATE, reducer }
