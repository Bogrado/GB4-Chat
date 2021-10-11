import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <header className="Message-header">
                message component
            </header>
            <h3 className="messageText">message: {props.text}</h3>
        </div>
    );
}

export default Message;