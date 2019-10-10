import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from '../ActionButtons';
import './styles.scss';

class CommentForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.commentInput = React.createRef();
        this.state = {
            isValid: this.isCommentValid(props.text)
        };
    }

    componentDidMount() {
        this.commentInput.current.focus();
    }

    handleInputChange() {
        let result = this.isCommentValid(this.commentInput.current.value);
        if (result !== this.state.isValid) {
            this.setState({isValid: result});
        }
    }

    isCommentValid(text) {
        return text && text.length > 0 && text.length < 100;
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmit(this.commentInput.current.value);
        if (this.props.isNew) {
            this.commentInput.current.value = '';
            this.setState({isValid: false});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='comment-form' onClick={() => {this.commentInput.current.focus()}}>
                <textarea rows={2}
                    className='comment-form__text' 
                    defaultValue={this.props.text} 
                    onChange={this.handleInputChange} 
                    ref={this.commentInput}
                    placeholder='Enter comment...'/>
                <ActionButtons>
                    <button className='btn' type='submit' disabled={!this.state.isValid}>Save</button>
                    {!this.props.isNew && <button className='btn' onClick={this.props.onCancel}>Cancel</button>}
                </ActionButtons>
            </form>
        );
    }
  
}

CommentForm.propTypes = {
    text: PropTypes.string,
    isNew: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
};

export default CommentForm;