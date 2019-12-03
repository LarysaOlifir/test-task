import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';

const CommentForm =  (props) => {
    const commentInput = useRef();
    const [comment, setComment] = useState(props.text);

    useEffect(() => commentInput.current && commentInput.current.focus(), [])

    const handleSubmit = (event)  => {
        event.preventDefault();
        event.stopPropagation();
        props.onSubmit(comment);
        if (props.isNew) {
            setComment('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea rows={2}
                className="comment-form__text" 
                ref={commentInput}
                value={comment}
                placeholder="Enter text..."
                onChange={(e) => {setComment(e.target.value)}}/>
            <ButtonGroup>
                <Button type="submit" variant="link" 
                    disabled={!comment}>Save</Button>
                {!props.isNew && <Button variant="link" onClick={props.onCancel}>Cancel</Button>}
            </ButtonGroup>
        </form>
    );
}

CommentForm.propTypes = {
    text: PropTypes.string,
    isNew: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
};

export default CommentForm;