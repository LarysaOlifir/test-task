import React from 'react';
import './styles.scss';

export default function ActionButtons(props) {
    return (
        <div className='action-btns'>{props.children}</div>
    );
}