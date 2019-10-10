import { 
    REQUESTED, 
    ADD_COMMENT, 
    GET_COMMENTS, 
    DELETE_COMMENT, 
    EDIT_COMMENT,
    TOGGLE_EDIT_COMMENT_MODE
} from '../constants';

export const addComment = text => ({
    type: ADD_COMMENT + REQUESTED,
    text,
    fakeId: new Date().getTime()
});

export const getComments = () => ({
    type: GET_COMMENTS + REQUESTED
});

export const deleteComment = id => ({
    type: DELETE_COMMENT + REQUESTED,
    id
});

export const editComment = (id, text) => ({
    type: EDIT_COMMENT + REQUESTED,
    id,
    text
});

export const toggleEditCommentMode = (id, value) => ({
    type: TOGGLE_EDIT_COMMENT_MODE,
    id,
    value
});