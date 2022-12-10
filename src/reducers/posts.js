import * as actionKey from '../actions/actions.js';

const posts = (posts = [], action) => {
    switch (action.type) {
        case actionKey.FETCH_ALL:
            return action.payload;
        case actionKey.CREATE:
            return [...posts, action.payload];
        case actionKey.UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case actionKey.DELETE:
            return posts.filter((post) => post.id !== action.payload);
        default:
            return posts;
    }
}

export default posts;