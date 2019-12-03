import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';
import { Button, ButtonGroup, Spinner }  from 'react-bootstrap';

const Comment = (props) => {

    const handleEdit = (text) => {
        props.onEdit(props.id, text);
        props.toggleEditMode(props.id, false);
    };

    return (
        props.isEditing ?
        <CommentForm 
            text={props.text} 
            onSubmit={handleEdit} 
            onCancel={() => props.toggleEditMode(props.id, false)}/> :
        <div className="comment">
            <div className="comment__text">
                {props.isSaving && <div className="comment__overlay"><Spinner animation="border" /></div>}
                {props.text}
            </div>
            <ButtonGroup>
                <Button  disabled={props.isSaving} variant="link" 
                    onClick={() => props.toggleEditMode(props.id, true)}>Edit</Button>
                <Button disabled={props.isSaving} variant="link" 
                    onClick={() => props.onDelete(props.id)}>Delete</Button>
            </ButtonGroup>
        </div>
    );  
}

export default Comment;

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number,
    isSaving: PropTypes.bool,
    isEditing: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    toggleEditMode: PropTypes.func.isRequired
};

