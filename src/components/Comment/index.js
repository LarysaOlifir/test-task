import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';
import Loader from '../Loader';
import ActionButtons from '../ActionButtons';
import './styles.scss';

class Comment extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleEdit(text) {
        this.props.onEdit(this.props.id, text);
        this.props.toggleEditMode(this.props.id, false);
    }

    render() {
        return (
            this.props.isEditing ?
                <CommentForm text={this.props.text} onSubmit={this.handleEdit} onCancel={() => this.props.toggleEditMode(this.props.id, false)}/> :
                <div className='comment'>
                    <div className='comment__text'>{this.props.text}</div>
                    {this.props.isSaving && <div className='comment__overlay'><Loader/></div>}
                    <ActionButtons>
                        <button  className='btn' onClick={() => this.props.toggleEditMode(this.props.id, true)}>Edit</button>
                        <button className='btn' onClick={this.handleDelete}>Delete</button>
                    </ActionButtons>
                </div>
        );  
    }
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number,
    isSaving: PropTypes.bool,
    isEditing: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Comment;