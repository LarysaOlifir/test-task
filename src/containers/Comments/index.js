import React from 'react';
import CommentForm from '../../components/CommentForm';
import Comment from '../../components/Comment';
import { connect }  from 'react-redux';
import { addComment, getComments, deleteComment, editComment, toggleEditCommentMode } from '../../actions/comments';

import './styles.scss';

class Comments extends React.Component {
    componentDidMount() {
        this.props.getComments();
    }

    render () {
        const { addComment, comments } = this.props;
        return (
            <div className='comments'>
                <CommentForm onSubmit={addComment} isNew={true}/>
                {comments.map((comment, index) => 
                    <Comment key={`comment_${comment.id}`} 
                        onDelete={this.props.deleteComment} 
                        onEdit={this.props.editComment}
                        toggleEditMode={this.props.toggleEditMode}
                        {...comment}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});
  
const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch(addComment(text)),
    getComments: () => dispatch(getComments()),
    deleteComment: id => dispatch(deleteComment(id)),
    editComment: (id, text) => dispatch(editComment(id, text)),
    toggleEditMode: (id, value) => dispatch(toggleEditCommentMode(id, value))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);