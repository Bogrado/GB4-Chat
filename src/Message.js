import PropTypes from 'prop-types';
import React,{
    useEffect
} from 'react';
import './Message.css';

function Message(props) {
    useEffect(()=> {
        if (props.msg.author === 'Bot') return
        setTimeout(props.onRendered, 1500)
    }, [])
    return (
        <div className="Message">
            <header className="Message-header">
                {props.msg.author}
            </header>
            <h3 className="messageText">message: {props.msg.text}</h3>
        </div>
    );
}
Message.propTypes = {
    msg: PropTypes.object,
    onRendered: PropTypes.function
};
export default Message;
