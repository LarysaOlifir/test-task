import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from '../../components/CommentForm';
import Comment from '../../components/Comment';
import  *  as actions  from '../../actions/comments';

const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    const addComment = text => dispatch(actions.addComment(text));
    const deleteComment = id => dispatch(actions.deleteComment(id));
    const editComment = (id, text) => dispatch(actions.editComment(id, text));
    const toggleEditMode = (id, value) => dispatch(actions.toggleEditCommentMode(id, value));

    useEffect(() => {dispatch(actions.getComments())}, [dispatch]);

    return (
        <div className='comments'>
            <CommentForm onSubmit={addComment} isNew={true}/>
            {comments.map(comment => 
                <Comment key={comment.id}
                    onDelete={deleteComment} 
                    onEdit={editComment}
                    toggleEditMode={toggleEditMode}
                    {...comment}/>
            )}
        </div>
    );
}  
export default Comments;