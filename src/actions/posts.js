import * as api from '../api/index.js';
import * as actionKey from './actions.js';

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: actionKey.FETCH_ALL, payload: data});

    } catch (error) {
        console.log(error);
    }

}

export const createPost = (post) => async(dispatch) => {

    try {
        const { data } = await api.createPost(post);
        dispatch({ type: actionKey.CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {

    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: actionKey.UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id);

        dispatch({type: actionKey.DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: actionKey.UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}